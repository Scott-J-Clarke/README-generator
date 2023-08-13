// Function returns a license badge based on what license is passed in (or an empty string):

function renderLicenseBadge(license) {
  if (license === 'Apache License 2.0') {
    return '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/license/apache-2-0)';
  }
  if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'GNU General Public License v2.0') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  }
  else return '';
}

// Function that generates content of README.
// There is a table of contents, but it is preset. 
// What if user doesn't want to include all parts of README ('usage', 'tests', etc.)? How will table of contents respond?
// Be aware of spacing inside backticks!
function generateMarkdown(data) {
  let markdown = `# ${data.title}
  
## Table of Contents

[Description](#description)

[Installation](#installation)

[License](#license)

## Description
  
#### ${data.description}

## Installation

#### ${data.installation}

## License

#### ${renderLicenseBadge(data.license)}`
  
  return markdown;
}

module.exports = generateMarkdown;

// TODO: Make a function that returns the license link. If there is no license, return an empty string.
// This is startr code, but the license link looks better as part of the badge.
// function renderLicenseLink(license) {}

// TODO: Make a function that returns the license section of README. If there is no license, return an empty string. This is starter code, but it's unclear what it is meant to do. 
// function renderLicenseSection(license) {}