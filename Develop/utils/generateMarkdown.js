// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README.
// Is this code meant to write the actual content of the README?
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


// Use this code to see if const generateMarkdown = require('./utils/generateMarkdown'); is connected.
// function generateMarkdown(data) {
//   console.log(data.title)
// }

// module.exports = generateMarkdown;