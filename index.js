const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs')

try {
  const url = core.getInput('url');
  console.log(`${url}!`);
  
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  
  fs.readFile('yo.json', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}