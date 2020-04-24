const core = require('@actions/core');
const github = require('@actions/github');
const { promises: fs } = require('fs');

const main = async () => {
  console.log('main')
  try {
    const filename = core.getInput('filename') || 'example.json'
    console.log(filename)
    
    // const url = core.getInput('url') || 'example.com'
    // console.log(url)

    const url1 = core.getInput('url1') || 'example.com'
    console.log(url1)

    const url2 = core.getInput('url2') || 'example.com'
    console.log(url2)
    
    // const url3 = core.getInput('url3') || 'example.com'
    // console.log(url3)
    
    console.log(JSON.stringify(url2))
    
    console.log(INPUT_URL)
    const urlEnv = INPUT_URL
    console.log(urlEnv.url)
    
    const data = await fs.readFile(filename, 'utf8')
    const updated = data.replace(/blank_host/g, url)
    console.log(updated)

    await fs.writeFile(filename, updated, 'utf8')
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
