package com.myorg;

import java.util.List;
import java.util.Map;

import software.amazon.awscdk.Duration;

import software.amazon.awscdk.services.ecs.AppProtocol;
import software.amazon.awscdk.services.ecs.AwsLogDriverMode;
import software.amazon.awscdk.services.ecs.AwsLogDriverProps;
import software.amazon.awscdk.services.ecs.Cluster;
import software.amazon.awscdk.services.ecs.ContainerDefinitionOptions;
import software.amazon.awscdk.services.ecs.ContainerImage;
import software.amazon.awscdk.services.ecs.CpuArchitecture;
import software.amazon.awscdk.services.ecs.EnvironmentFile;
import software.amazon.awscdk.services.ecs.FargateService;
import software.amazon.awscdk.services.ecs.FargateTaskDefinition;
import software.amazon.awscdk.services.ecs.FargateTaskDefinitionProps;
import software.amazon.awscdk.services.ecs.HealthCheck;
import software.amazon.awscdk.services.ecs.LogDriver;
import software.amazon.awscdk.services.ecs.OperatingSystemFamily;
import software.amazon.awscdk.services.ecs.PortMapping;
import software.amazon.awscdk.services.ecs.Protocol;
import software.amazon.awscdk.services.ecs.RuntimePlatform;
import software.amazon.awscdk.services.ec2.SecurityGroup;
import software.amazon.awscdk.services.ec2.Vpc;

import software.amazon.awscdk.services.iam.PolicyStatement;
import software.amazon.awscdk.services.iam.Role;
import software.amazon.awscdk.services.iam.ServicePrincipal;

import software.amazon.awscdk.services.logs.LogGroup;

import software.amazon.awscdk.services.s3.Bucket;

import software.amazon.awscdk.Size;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;

import software.constructs.Construct;

public class InfrastructureStack extends Stack {
    public InfrastructureStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public InfrastructureStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        String s3BucketArn = System.getenv("S3_BUCKET");

        if (s3BucketArn == null) {
            throw new RuntimeException("S3_BUCKET environment variable is required");
        }

        String s3Key = "production.env";
        String s3Arn = s3BucketArn + "/" + s3Key;

        Vpc vpc = Vpc.Builder.create(this, "HockeyTeethAPI-VPC").build();

        SecurityGroup securityGroup = SecurityGroup.Builder.create(this, "HockeyTeethAPISecurityGroup")
            .vpc(vpc)
            .allowAllOutbound(true)
            .build();

        // TODO: Replace rule with a load balancer
        securityGroup.addIngressRule(
            software.amazon.awscdk.services.ec2.Peer.anyIpv4(),
            software.amazon.awscdk.services.ec2.Port.tcp(80),
            "Allow inbound HTTP traffic"
        );

        // TODO: Replace rule with a load balancer
        securityGroup.addIngressRule(
            software.amazon.awscdk.services.ec2.Peer.ipv4("0.0.0.0/0"),
            software.amazon.awscdk.services.ec2.Port.tcp(8080),
            "Allow inbound HTTP traffic on port 8080"
        );

        // TODO: Replace rule with a load balancer
        securityGroup.addIngressRule(
            software.amazon.awscdk.services.ec2.Peer.ipv4("0.0.0.0/0"),
            software.amazon.awscdk.services.ec2.Port.tcp(80),
            "Allow inbound HTTP traffic on port 80"
        );

        Cluster cluster = Cluster.Builder.create(this, "HockeyTeethAPICluster")
            .vpc(vpc)
            .build();

        Role taskExecutionRole = Role.Builder.create(this, "TaskExecutionRole")
            .assumedBy(ServicePrincipal.Builder.create("ecs-tasks.amazonaws.com")
                .build())
            .build();

        // Built from managed policy: AmazonECSTaskExecutionRolePolicy
        taskExecutionRole.addToPolicy(PolicyStatement.Builder.create()
            .actions(List.of("ecr:GetAuthorizationToken",
                             "ecr:BatchCheckLayerAvailability",
                             "ecr:GetDownloadUrlForLayer",
                             "ecr:BatchGetImage",
                             "logs:CreateLogStream",
                             "logs:PutLogEvents"))
            .resources(List.of("*"))
            .build());

        taskExecutionRole.addToPolicy(PolicyStatement.Builder.create()
            .actions(List.of("s3:GetObject"))
            .resources(List.of(s3Arn))
            .build());

        taskExecutionRole.addToPolicy(PolicyStatement.Builder.create()
            .actions(List.of("ec2:AuthorizeSecurityGroupIngress"))
            .resources(List.of("*"))
            .build());

        FargateTaskDefinitionProps taskDefinitionProps =
            FargateTaskDefinitionProps.builder()
                .memoryLimitMiB(512)
                .cpu(256)
                .executionRole(taskExecutionRole)
                .runtimePlatform(RuntimePlatform.builder()
                    .cpuArchitecture(CpuArchitecture.ARM64)
                    .operatingSystemFamily(OperatingSystemFamily.LINUX)
                    .build())
                .build();

        FargateTaskDefinition taskDefinition =
            new FargateTaskDefinition(this,
                                      "HockeyTeethAPITaskDefinition",
                                      taskDefinitionProps);

        ContainerDefinitionOptions containerDefinitionOptions = ContainerDefinitionOptions.builder()
            // TODO: Reference tag from API project
            .image(ContainerImage.fromRegistry("zachgrande/hockeyteeth-api:0.0.3"))
            .cpu(0)
            .essential(true)
            .portMappings(List.of(
                PortMapping.builder()
                    .name("hockeyteeth-api-8080-tcp")
                    .containerPort(8080)
                    .hostPort(8080)
                    .protocol(Protocol.TCP)
                    .appProtocol(AppProtocol.getHttp())
                    .build()
            ))
            .environment(Map.of("JAR_FILE", "api-0.0.3-SNAPSHOT.jar"))
            .environmentFiles(List.of(EnvironmentFile.fromBucket(Bucket.fromBucketArn(this, "EnvFileBucket", s3BucketArn), s3Key)))
            .logging(LogDriver.awsLogs(AwsLogDriverProps.builder()
                .logGroup(LogGroup.fromLogGroupName(this, "LogGroupAPI", "/hockeyteeth-api/"))
                .streamPrefix("ecs")
                .mode(AwsLogDriverMode.NON_BLOCKING)
                .maxBufferSize(Size.gibibytes(5))
                .build()))
            .healthCheck(HealthCheck.builder()
                .command(List.of("CMD-SHELL", "curl -f http://localhost:8080/status || exit 1"))
                .interval(Duration.seconds(30))
                .timeout(Duration.seconds(5))
                .retries(3)
                .build())
            .build();

        taskDefinition.addContainer("HockeyTeethAPIContainer", containerDefinitionOptions);

        ContainerDefinitionOptions nginxContainerDefinitionOptions = ContainerDefinitionOptions.builder()
            // TODO: Reference tag from API project
            .image(ContainerImage.fromRegistry("zachgrande/hockeyteeth-nginx:0.0.2"))
            .cpu(0)
            .essential(true)
            .portMappings(List.of(
                PortMapping.builder()
                    .name("nginx-80-tcp")
                    .containerPort(80)
                    .hostPort(80)
                    .protocol(Protocol.TCP)
                    .appProtocol(AppProtocol.getHttp())
                    .build()
            ))
            .logging(LogDriver.awsLogs(AwsLogDriverProps.builder()
                .logGroup(LogGroup.fromLogGroupName(this, "LogGroupNGINX", "/nginx/"))
                .streamPrefix("ecs")
                .mode(AwsLogDriverMode.NON_BLOCKING)
                .maxBufferSize(Size.gibibytes(5))
                .build()))
            .build();

        taskDefinition.addContainer("HockeyTeethNGINXContainer", nginxContainerDefinitionOptions);

        FargateService.Builder.create(this, "HockeyTeethAPIService")
            .cluster(cluster)
            .taskDefinition(taskDefinition)
            .assignPublicIp(true)
            .serviceName("hockeyteeth-api-service")
            .desiredCount(1)
            .securityGroups(List.of(securityGroup))
            .build();
    }
}
