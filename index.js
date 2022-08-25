// packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [];

// function to write README file
const writeToFile = (fileName, data) => {

    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
      
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
    
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a project description: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter a description for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter usage info!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter contribution guidelines: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter test instructions: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter test instructions!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Does your project have a license?',
            default: true
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose your project license:',
            choices: ['test1', 'test2', 'test3'],
            when: ({ confirmLicense }) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email contact information: (required)',
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ])

    .then(data => {

        console.log(data);

        writeToFile('./dist/README.md', generateMarkdown(data));
    });

};

// Function call to initialize app
//init();

const dummyData = {
    title: 'README generator',
    description: 'readme generator',
    installation: 'installation instructions placeholder',
    usage: 'usage info placeholder',
    contributing: 'contribution guidelines ph',
    tests: 'test instructions ph',
    confirmLicense: true,
    license: 'test2',
    username: 'desguerra',
    email: 'sample@github.io'
};

writeToFile('./dist/README.md', generateMarkdown(dummyData));
