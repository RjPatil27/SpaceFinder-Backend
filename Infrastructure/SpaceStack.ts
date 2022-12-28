import {Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Code, Function as LambdaFunction, Runtime} from 'aws-cdk-lib/aws-lambda';
import {join} from 'path';

export class SpaceStack extends Stack {
    // To initialize logic inside our Stack, we need to provide 
    // Constructor  
    // id - > stackID
    constructor(scope: Construct, id: string, props: StackProps) {
        super(scope, id, props)
    }

    // Create Lambda resource
    readonly helloLambda = new LambdaFunction(this, 'helloLambda',{
        runtime : Runtime.NODEJS_18_X,
        code : Code.fromAsset(join(__dirname,'..','services','UnderstandLambdas','hello')),
        handler: 'hello.main'
    })

}