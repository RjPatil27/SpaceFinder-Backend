import {Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Function as LambdaFunction, Runtime} from 'aws-cdk-lib/aws-lambda';
import {join} from 'path';
import {LambdaIntegration, RestApi} from 'aws-cdk-lib/aws-apigateway'

export class SpaceStack extends Stack {

    private api = new RestApi(this, 'SpaceApi')

    // To initialize logic inside our Stack, we need to provide 
    // Constructor  
    // id - > stackID
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props)
    
    // Create Lambda resource in Constructor
    const helloLambda = new LambdaFunction(this, 'helloLambda',{
        runtime : Runtime.NODEJS_18_X,
        code : Code.fromAsset(join(__dirname,'..','services','UnderstandLambdas')),
        handler: 'hello.main'
    })
    
    // Hello API Lambda Integration
    // First we will need Lambda integration object which will take helloLambda object as parameter
    // using below method, we can link Lambda to the API Gateway
    const helloLambdaIntegration = new LambdaIntegration(helloLambda)
    // provide a resource
    const helloLambdaResource = this.api.root.addResource('hey')
    // provide a method - GET/POST/DELETE
    helloLambdaResource.addMethod('GET',helloLambdaIntegration)

    }

}