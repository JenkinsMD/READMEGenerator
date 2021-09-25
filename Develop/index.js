// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

console.log("yoyoyo")

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe the project?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your contact email?',
      },
      
    ]);
  };
// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create a function to initialize app
const init = () => {
    questions()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };


// Function call to initialize app
console.log("Before init")
init();


