const inquirer = require('inquirer'); //Imports the inquirer
const fs = require('fs'); //Imports Fs
const { isBuffer } = require('util');
const generateMarkdown  = require('./utils/generateMarkdown') //Imports the generate markdown file

// TODO: Create an array of questions for user input
const questions = [
    {
    type:'input',
    name: 'title',
    message: 'Enter Project Name:',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a valid name for your project');
            return false;
        }
    }
    },
    {
    type:'input',
    name: 'Project Description',
    message: 'Enter Project Description:',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter a valid description for your project');
        return false;
    }
    }
    },
    {
    type:'input',
    name: 'Installation Instructions',
    message: 'Enter Installation Instructions for the Project:',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter a valid installation instructions for your project');
        return false;
    }
}
    },
    {
    type:'input',
    name: 'Usage Information',
    message: 'How is this Project used?',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter a valid use for your project');
        return false;
    }
}
    },
    {
    type:'input',
    name: 'Contribution Guidelines',
    message: 'How can further contribution be made to this applications?',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter a valid contribution guidelines for your project');
        return false;
    }
}
    },
    {
    type:'input',
    name: 'Test Instructions',
    message: 'Please insert the test instructions for this project?',
    validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter a valid test instructions for your project');
        return false;
    }
}  
    }
];



inquirer.prompt(questions).then(data => writeToFile('README.md',data));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t') , err =>
        err ? console.log(err) : console.log(data))
    };

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
