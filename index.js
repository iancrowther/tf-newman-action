const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');

const main = async () => {
  try {
    const url = core.getInput('url')
    const data = await fs.readFile('postman_environment.json', 'utf8')
    await fs.writeFile('bo.json', data.replace(/blank_host/g, url), 'utf8')
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();