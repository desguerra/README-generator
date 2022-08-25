// packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

// const generatemarkDown = require('./utils/generateMarkdown.js');


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

        writeToFile('./dist/README.md', JSON.stringify(data, null, '\t'));
    });
};

// Function call to initialize app
init();
