const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');

const main = async () => {
  try {
    const filename = core.getInput('filename')
    const url = core.getInput('url')
    
    const data = await fs.readFile(filename, 'utf8')
    
    await fs.writeFile(filename, data.replace(/blank_host/g, url), 'utf8')
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
