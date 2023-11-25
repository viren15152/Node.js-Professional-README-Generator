// This section includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown')

// I have created an array of questions for user input. 
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title name of this project?',

  },
  {
    type: 'input',
    name: 'description',
    message: 'Can you provide a brief description of your project and what it does?',
  },
  {
    type: 'input',
    name: 'screenshotPath',
    message: 'Would you like to include visuals? Enter the file path or URL of a screenshot (if desired):',
  },
  {
    type: 'input',
    name: 'technologiesUsed',
    message: 'List the technologies used in your project (comma-seperated):',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How would users be able to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should users use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'Others'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your current email address?',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
