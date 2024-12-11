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
        choices: ['None', 'Apache_2.0', 'GPLv3', 'MIT', 'BSD_2--Clause', 'Boost_1.0', 'CC0-1.0', 'EPL_2.0', 'AGPL_v3', 'GPL_v2', 'LGPL_v2.1', 'MPL_2.0', 'Unlicense'],
        default: 'None'
    },
    {
        type: 'input',
        message: 'List your collaborators and any third party assets that require attribution.',
        name: 'credits',
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
function writeToFile(fileName, data) {



}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const markdown = generateMarkdown(data);
            fs.writeFileSync('README.md', markdown);
            console.log('README.md has been generated successfully!');
        })
};

// Function call to initialize app
init();
