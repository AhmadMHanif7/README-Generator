// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const myMap = new Map([
    ['GNU AGPLv3' , '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'],
    ['GNU GPLv3' , '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
    ['GNU LGPLv3' , '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'],
    ['Mozilla Public License 2.0' , '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
    ['Apache License 2.0' , '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
    ['MIT' , '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
    ['Boost Software License 1.0' , '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)']
  ]);

  const badgeIcon = license.map(x => myMap.get(x));

  return badgeIcon;

  };

const newLicenseArray = license =>{

  const singleLicense = license.map(x => x + '<br />')

  return singleLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  <br />
  <br />

  ## Description 

  ${data.description}


  <br />
  <br />
  <br />

  ## Table of Content

  [Installation](#installation-instructions)

  [Usage Information](#usage-information)

  [Contribution Guidelines](#contribution-guidelines)

  [Test Instructions](#test-instructions)

  [License](#license)

  [Questions](#questions)

  <br />
  <br />
  <br />
  
  ## Installation

  ${data.installationInstructions}

  <br />
  <br />
  <br />

  ## Usage Information

  ${data.usageInformation}  

  <br />
  <br />
  <br />

  ## Contribution Guidelines

  ${data.contributionGuidelines}

  <br />
  <br />
  <br />
  
  ## Test Instructions

  ${data.testInstructions}

  <br />
  <br />
  <br />
 
  ## License

  ${newLicenseArray(data.license)}

  <br />
  <br />
  <br />

  ## Questions
  
  Github Profile: https://github.com/${data.github}

  For further question you can email me at: ${data.email}
`;
}

module.exports = generateMarkdown;