// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// const fs = require('fs'); // TODO: add to generateMarkdown.js file, then include that file here?

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        console.log(data);
    });
};

// Function call to initialize app
init();
