import * as core from '@actions/core';
import * as github from '@actions/github';
console.log("Hello via Bun2!");

async function isEmpty(owner: string, repo: string, octokit): Promise<boolean> {
    try {
        const { data: contents } = await octokit.repos.getContent({
            owner,
            repo,
            path: "",
        });
        // console.log(contents);
        return Array.isArray(contents) && contents.length === 0;
    } catch (error) {
        const e = error as any;
        if (e.status === 404) {
            return true;
        }
        throw error;
    }
}


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
        const empty = await isEmpty(repo.owner.login, repo.name, octokit);
        if (empty) {
            console.log(`Repo ${repo.name} is empty`);
        } else {
            const readmeResponse = await octokit.rest.repos.getReadme({
                owner: github.context.repo.owner,
                repo: github.context.repo.repo,
            });
            if (readmeResponse.status !== 200) {
                console.log(`No README found for repo ${repo.name}`);
                continue;
            }
            console.log(readmeResponse.data);

            // const {
            //     data: file
            // } = await octokit.rest.repos.getContent({
            //     owner: repo.owner.login,
            //     repo: repo.name,
            //     path: readmeResponse.data.path,
            // });

            const readme = Buffer.from(readmeResponse.data.content, 'base64').toString();
            
        }
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