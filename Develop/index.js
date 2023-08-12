// Used "npm i inquirer" and have additional "dependencies" that are in the "package-lock.json" file.

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Import Node file system (fs) so that the writeFile method can be used:
const fs = require('fs');

// Provided with "const questions = [];" as starter code to create an array of questions for user input.

// Make first iteration of 3 questions to generate README. Of the questions used to make the README, nearly every question (except one) seems to be a 'type: "input"', question.

// Need to have some kind of function wrapped around 'inquirer.prompt' to invoke on page load.

inquirer
    .prompt([
        {
            name: 'title',
            message: 'What is the title of your README?',
            type: 'input',
        },
        {
            name: 'description',
            message: 'Please type at least one sentence to explain your application:',
            type: 'input',
        },
        {
            name: 'license',
            message: 'What license do you want for your README?',
            type: 'list',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'MIT License', 'Mozilla Public License 2.0'],
        }
    ])

.then(function(data) {
    // After user inputs data, it appears in the terminal. Testing to see that info is retained:
    fs.writeFile('userData.txt', JSON.stringify(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    // console.log(data.title);
    // console.log(data.description);
    // console.log(data.license);
})

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// Starter code provided for doing something with the data.
// Is this function meant to create the README.md file?
// It seems like this function should take in user data and send it to the "generateMarkdown" function in "generateMarkdown.js":

// This was part of the starter code:
// function writeToFile(fileName, data) { 
// }

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();




// It might be useful to ignore this part as well since "function writeToFile(fileName, data) { }" was provided.

// then((data) => {
// // Use user feedback for... whatever!!
// })
  
// It might be useful to ignore this part about errors for now. Can come back to it later in the assignment.

//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// Tried using "fs.writeFile..." but then removed it due to presence of generateMarkdown.js
// fs.writeFile('README.md', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
