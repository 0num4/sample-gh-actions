import * as core from '@actions/core';
import * as github from '@actions/github';
console.log("Hello via Bun2!");



try {
    const nameToGreet = core.getInput('who-to-greet');
    const token = core.getInput('github-pat-token');
    const inputBadges = core.getInput('badges');
    const badgeStyle = core.getInput('badge-style');
    const octokit = github.getOctokit(token);
    const repos = await octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, {
        per_page: 100,
        affiliation: "owner",
    });
    const totalRepos = repos.length;
    console.log(`Total repos: ${totalRepos}`);
    for (const repo of repos) {
        console.log(`Repo: ${repo.name}`);
    }


    console.log(`Hello, ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log('The event payload: ', payload);
} catch (error) {
    const e = error as Error;
    core.setFailed(e.message);
}