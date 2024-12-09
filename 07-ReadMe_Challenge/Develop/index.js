// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Provide your project title.',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide your project description.',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Would you like to add a Table of Contents?',
        name: 'toc',
        choices: [{ name: 'YES', value: true },
        { name: 'NO', value: false }],
        default: ['YES']
    },
    {
        type: 'input',
        message: 'Provide the installation instructions for your project.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage instructions for your project.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose a license to add to your project.',
        name: 'license',
        choices: ['None', 'Apache 2.0', 'GNU General Public v3.0', 'MIT', 'BSD 2-Clause "Simplified"', 'Boost Software 1.0', 'Creative Commons Zero v1.0', 'Eclipse Public 2.0', 'GNU Affero General Public v3.0', 'GNU General Public v2.0', 'GNU Lesser General Public v2.1', 'Mozilla Public 2.0', 'The Unlicense'],
        default: 'None'
    },
    {
        type: 'input',
        message: 'List your collaborators and any third party assets that require attribution.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide examples on how to run your tests.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter your GitHub profile link.',
        name: 'gitHub',
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log('Your responses have been recorded.')
        }
        )
};

// Function call to initialize app
init();
