const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');
const path = require('path');

const main = async () => {
  try {
    const filename = core.getInput('filename')
    const { url } = JSON.parse(core.getInput('url'))
    const workingDir = core.getInput('workingDir')

    const filePath = path.join(workingDir, filename)

    const data = await fs.readFile(filePath, 'utf8')
    const updated = data.replace(/blank_host/g, url.value)
    console.log(updated)
    
    await fs.writeFile(filePath, updated, 'utf8')
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
