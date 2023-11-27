// This section includes packages needed for this application (require statement).
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// I have created an array of questions for user input. 
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title name of this project?',

  },
  { 
    type: 'checkbox',
    name: 'tableOfContents',
    message: 'Select sections for your Table of Contents (use space to select multiple):',
    choices: [
      'Description',
      'Visuals',
      'Technologies Used',
      'Installation',
      'Usage',
      'Contributing',
      'License',
      'Contact',
      'Additional Questions',
    ],
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
  },
  {
    type: 'input',
    name: 'description',
    message: 'Can you provide a brief description of your project and what it does?',

  },
];

// In this section I've created a function to write the README file. This function uses the 'fs.writeFile' medthod to write data to a file, It also logs an error to the console should there be any. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`${fileName} created successfully!`);
    });
}

// I have created a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
