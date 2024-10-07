package com.myorg;

import java.util.List;
import software.constructs.Construct;
import software.amazon.awscdk.Stack;
import software.amazon.awscdk.StackProps;
import software.amazon.awscdk.services.ecs.Protocol;
import software.amazon.awscdk.services.ecs.Cluster;
import software.amazon.awscdk.services.ecs.FargateTaskDefinition;
import software.amazon.awscdk.services.ecs.FargateTaskDefinitionProps;
import software.amazon.awscdk.services.ecs.PortMapping;
import software.amazon.awscdk.services.ecs.ContainerDefinitionOptions;
import software.amazon.awscdk.services.ecs.ContainerImage;
import software.amazon.awscdk.services.ecs.FargateService;

public class InfrastructureStack extends Stack {
    public InfrastructureStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public InfrastructureStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        Cluster cluster = new Cluster(this, "HockeyTeethAPICluster");

        FargateTaskDefinitionProps taskDefinitionProps =
            FargateTaskDefinitionProps.builder()
                .memoryLimitMiB(512)
                .cpu(256)
                .build();

        FargateTaskDefinition taskDefinition = 
            new FargateTaskDefinition(this,
                                      "HockeyTeethAPITaskDefinition",
                                      taskDefinitionProps);

        ContainerDefinitionOptions containerDefinitionOptions = ContainerDefinitionOptions.builder()
            .image(ContainerImage.fromRegistry("hockeyteeth-api"))
            .portMappings(List.of(
                PortMapping.builder()
                    .containerPort(8080)
                    .protocol(Protocol.TCP)
                    .build()
            ))
            .build();

        taskDefinition.addContainer("HockeyteethApi", containerDefinitionOptions);

        FargateService.Builder.create(this, "HockeyTeethAPIService")
            .cluster(cluster)
            .taskDefinition(taskDefinition)
            .assignPublicIp(true)
            .serviceName("hockeyteeth-api-service")
            .build();
    }
}
