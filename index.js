const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const createReadMe =  require('./assets/createReadMe');
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email',

    },
    {
        type: 'input',
        name: 'project-name',
        message: 'Please name your Project'

    },
    {
        type: 'input',
        name: 'project-description',
        message: 'Describe your project'

    },
    {
        type: 'input',
        name: 'project-link',
        message: 'please link your project'
    },


    {
        type: 'input',
        name: 'project-installs',
        message: 'please install, use npm i',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'project-status',
        message: 'Where are you at on this project, currently?',
    },

   /*questions for generating readmes for work
   will come back to later to reformat add additional possible questions
    {
        type: 'input'
        name: 'living-room'
        message: 'living room device name?'

    },

    {
        type: 'input'
        name: 'master-bedroom'
        message: 'master-bedroom device name?'

    },

    {
        type: 'input'
        name: 'kitchen'
        message: 'kitchen device name?'
    }
    */

    
];

function writeToFile(filename, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile('README.md', createReadMe({...inquirerResponses}));
    })
}

init();