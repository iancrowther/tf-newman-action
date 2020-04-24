const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');

const main = async () => {
  try {
    const filename = core.getInput('filename') || 'example.json'
    const { url } = core.getInput('url') || 'example.com'
    console.log(url)
    
    const data = await fs.readFile(filename, 'utf8')
    const updated = data.replace(/blank_host/g, url)
    console.log(updated)

    await fs.writeFile(filename, updated, 'utf8')
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
