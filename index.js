const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs')

const readFile = async () => {
  try {
    const data = await fs.readFile('yo.json')
    return data;
  } catch (error) {
    throw error
  }
}

const main = () => {
  try {
    const url = core.getInput('url');
    console.log(`${url}!`);
    
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    
    console.log(`yo: ${readFile()}`)
  
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();