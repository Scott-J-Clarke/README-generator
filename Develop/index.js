// Initialized inquirer with "npm i inquirer." Now have additional "dependencies" that are in the "package-lock.json" file.
// 'generateMarkdown' connects to generateMarkdown.js and 'fs' allows writeFile to be used. 

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Remaining questions are:
// - Usage
// - Contributing
// - Tests
// - Questions
// Should there be if/else statements with console.logs for user to choose if they want to include these parts?

const questions = [
    {
        name: 'title',
        message: 'What is the title of your README?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Type at least one sentence to explain your application:',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Write the steps a user must take to install your application:',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What license do you want for your README?',
        type: 'list',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'MIT License', 'Mozilla Public License 2.0']
    }
];

// Function to write file:
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Success! Your README file has been generated!');
    }); 
}

// Function to initialize README generator app:
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        // Inside 'init' function 'writeToFile is invoked to create './utils/README.md':
        writeToFile('./utils/README.md', generateMarkdown(userResponses));
        // try-catch syntax requires a catch or to work properly:
    } catch (error) {
        console.log(error);
    }
}

// Invoke the function:
init();
