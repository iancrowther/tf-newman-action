const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');

const main = async () => {
  try {
    const filename = core.getInput('filename')
    const { url } = JSON.parse(core.getInput('url'))
    const data = await fs.readFile(filename, 'utf8')
    const updated = data.replace(/blank_host/g, url.value)
    console.log(updated)

    await fs.writeFile(filename, updated, 'utf8')
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
