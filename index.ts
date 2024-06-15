import * as core from '@actions/core';
import * as github from '@actions/github';
console.log("Hello via Bun!");

try {
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello, ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log('The event payload: ', payload);
} catch (error) {
    const e = error as Error;
    core.setFailed(e.message);
}