# Welcome to your CDK Java project!

This is a blank project for CDK development with Java.

Tutorials:

* <https://docs.aws.amazon.com/cdk/v2/guide/hello_world.html>
* <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tutorial-ecs-web-server-cdk.html>

The `cdk.json` file tells the CDK Toolkit how to execute your app.

It is a [Maven](https://maven.apache.org/) based project, so you can open this project with any Maven compatible Java IDE to build and run tests.

## Useful commands

 * `mvn package`     compile and run tests
 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation
 * `cdk boostrap`    read more: <https://docs.aws.amazon.com/cdk/v2/guide/bootstrapping.html>

Enjoy!

## Notes

* InfrastructureApp.java
  * If the environment is not specified, we can use `cdk synth` to generate a template to deploy anywhere
