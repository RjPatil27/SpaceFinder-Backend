// Import SpaceStack class from SpaceStack.ts file
import {SpaceStack} from './SpaceStack'
// Import App Construct from aws-cdk-lib
import {App} from 'aws-cdk-lib'

// Initialize our Project
const app = new App()
new SpaceStack(app, 'Space-finder',{
    stackName: 'SpaceFinder'
})
