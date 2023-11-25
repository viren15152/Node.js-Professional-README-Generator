// This section includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
    message: 'Enter the file path or URL of a screenshot (if any):',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
