// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');



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
        name: 'install',
        message: 'Do you have any installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Do you have any usage information?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Do you have any contribution information?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Do you have any test information?',
      },
      {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'GNU', 'Apache', 'None'],
        message: 'Choose a license'

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
      .then((answers) => {
       
        generateMarkdown.renderLicenseBadge(answers)
        
        return answers
       
    })
      .then((answers) => writeFileAsync('README.md', generateMarkdown.generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
    
  };


// Function call to initialize app

init();



