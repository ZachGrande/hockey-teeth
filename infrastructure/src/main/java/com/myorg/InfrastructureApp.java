package com.myorg;

import software.amazon.awscdk.App;
import software.amazon.awscdk.Environment;
import software.amazon.awscdk.StackProps;

import java.util.Arrays;

public class InfrastructureApp {
    public static void main(final String[] args) {
        App app = new App();

        new InfrastructureStack(app, "InfrastructureStack", StackProps.builder()

            .env(Environment.builder()
                .account(System.getenv("CDK_DEFAULT_ACCOUNT"))
                .region(System.getenv("CDK_DEFAULT_REGION"))
                .build())

            // Uncomment the next block if you know exactly what Account and Region you
            // want to deploy the stack to.
            /*
            .env(Environment.builder()
                .account("123456789012")
                .region("us-east-1")
                .build())
            */

            // For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
            .build());

        app.synth();
    }
}

