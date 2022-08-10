// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description 

  ${data.description}




  ## Table of Content

  -[Installation](#installation-instructions)

  -[Usage Information](#usage-information)

  -[Contribution Guidelines](#contribution-guidelines)

  -[Test Instructions](#test-instructions)

  -[License](#license)

  -[Questions](#questions)


  

  ## Installation

  ${data.installationInstructions}




  ## Usage Information

  ${data.usageInformation}  




  ## Contribution Guidelines

  ${data.contributionGuidelines}




  ## Test Instructions

  ${data.testInstructions}




  ## License

  Liscenses go here




  ## Questions
  
  Github Repository: 

  For further question reach me at: 
`;
}

module.exports = generateMarkdown;