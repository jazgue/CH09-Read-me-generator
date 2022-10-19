// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },

    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You need to enter a name to continue');
                return false;
            }
        }
    },
  
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description');
                return false;
            }
        }
    },
 
    {
        type: 'input',
        name: 'installation',
        message: 'Instrtuctions on how to install the project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to provide installation info to continue');
                return false;
            }
        }
    },
    
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project');
                return false;
            }
        }
    },
  
    {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?',
        validate: testingInput => {
            if (testingInput) {
                return true;
            } else {
                console.log('You need to describe how to test this project');
                return false;
            }
        }
    },

    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose a license for your project',
        choices: ['MIT', 'Apache', 'GNU-General-Public', 'Mozilla-Public', 'Common-Development-and Distribution', 'None'],
        validate: licensingInput => {
            if (licensingInput) {
                return true;
            } else {
                console.log('You must pick a license for the project');
                return false;
            }
        }
    },
   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('File written!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
}

// Function call to initialize app
init();
