// Used "npm i inquirer" and have additional "dependencies" that are in the "package-lock.json" file.
// generateMarkdown variable is meant to connect to generateMarkdown.js because there are functions in that file.
// Import Node file system (fs) so that the writeFile method can be used:

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// Provided with "const questions = [];" as starter code to create an array of questions for user input.

// Make first iteration of 3 questions to generate README. Of the questions used to make the README, nearly every question (except one) seems to be a 'type: "input"', question.

// Need to have some kind of function wrapped around 'inquirer.prompt' to invoke on page load.

const questions = [
    {
        name: 'title',
        message: 'What is the title of your README?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'Please type at least one sentence to explain your application:',
        type: 'input'
    },
    {
        name: 'license',
        message: 'What license do you want for your README?',
        type: 'list',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'MIT License', 'Mozilla Public License 2.0']
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Success! Your README file has been generated!');
    }); 
}

async function init() {
    try {
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
    } catch (error) {
        console.log(error);
    }
}

init();


// .then(function(data) {
    // Using writeFile will overwrite the information in 'userData.txt' file. 'userData.txt' writes file as an object.
    // Can come back to this piece later to figure out how to, perhaps, append more objects to 'userData.txt'?

    
    // Do we want 'userData.txt' written as an object? Is that a convenient style for generateMarkdown to work with?
    
    // This will append '[object][Object]' to the end of the previous object. It will not go on a new line.
    // fs.appendFile('userData.txt', `${data}\n`, (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );

    // fs.appendFile('userData.txt', JSON.stringify(data), (err) =>
    //     err ? console.error(err) : console.log('Success!')
    // );

    
    // Used console.logs to check that user input was being registered:
    // console.log(data.title);
    // console.log(data.description);
    // console.log(data.license);
// })

// Starter code provided for doing something with the data.
// Is this function meant to create the README.md file?
// It seems like this function should take in user data and send it to the "generateMarkdown" function in "generateMarkdown.js":

// This was part of the starter code:

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

