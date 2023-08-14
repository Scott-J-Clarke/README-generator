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

// Returns the 'license' section of README, and if there is no license it returns an empty string: 
function renderLicenseSection(data) {
  if (data.license !== '') {
    return `This application is covered by ${data}.`
  }
  else return '';
}

// Returns the link in the 'license' section of the README. If there is no license, return an empty string:
function renderLicenseLink(license) {
  if (license === 'Apache License 2.0') {
    return '[Read more about the license](https://opensource.org/license/apache-2-0).';
  }
  if (license === 'GNU General Public License v3.0') {
    return '[Read more about the license](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'GNU General Public License v2.0') {
    return '[Read more about the license](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  }
  if (license === 'MIT License') {
    return '[Read more about the license](https://opensource.org/licenses/MIT)';
  }
  if (license === 'Mozilla Public License 2.0') {
    return '[Read more about the license](https://opensource.org/licenses/MPL-2.0)';
  }
  else return '';
}

// Function that generates content of README:
function generateMarkdown(data) {
  let markdown = `# ${data.title}
  
#### ${renderLicenseBadge(data.license)}

## Table of Contents

[Description](#description)

[Installation](#installation)

[License](#license)

[Usage](#usage)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Description
  
#### ${data.description}

## Installation

#### ${data.installation}

## License

#### ${renderLicenseSection(data.license)} 

#### ${renderLicenseLink(data.license)}

## Usage

#### ${data.usage}

## Contributing

#### ${data.contributing}

## Tests

#### ${data.tests}

## Questions

#### View my GitHub profile at:

#### [${data.username}](github.com/${data.username})

#### Email me at:

#### ${data.email}`

  return markdown;
}

module.exports = generateMarkdown;
