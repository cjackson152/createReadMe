const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const buildReadMe =  require('./assets/buildReadMe');
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Please enter GitHub username.',
        default: 'Cjackson152'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email',
        default: 'cole_jackson@live.com'

    },
    {
        type: 'input',
        name: 'projectName',
        message: 'Please name your Project'

    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Describe your project'

    },
    {
        type: 'input',
        name: 'projectLink',
        message: 'please link your project'
    },


    {
        type: 'input',
        name: 'projectInstalls',
        message: 'please install, use npm i',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'projectStatus',
        message: 'Where are you at on this project, currently?',
        default: 'Work in Progress'
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
    return fs.writeFileSync(path.join(process.cwd(), filename), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile('README.md', buildReadMe({...inquirerResponses}));
    })
}

init();