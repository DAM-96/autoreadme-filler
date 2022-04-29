// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fileSys = require('fs');
const genMkdn = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Name of the project owner: ',
      },
    {
        type: 'input',
        name: 'title',
        message: 'Title of the project: ',
      },
      {
        type: 'editor',
        name: 'description',
        message: 'Project description: ',
      },
      {
        type: 'editor',
        name: 'installation',
        message: 'How is the app/project installed?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Project test samples: ',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to the project? ',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: genMkdn.licenses,
      },
      {
        type: 'input',
        name: 'gitHubUser',
        message: 'GitHub username: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email: ',
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Name of the README file [Default - README]: ',
        default: "README"
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName += ".md"
    fileSys.writeFile(fileName, data, function(error){
        if(error) console.error("Error: ", error);
        console.log(`${fileName} created successfully at: ${__dirname}`)
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then( answers => {
        let readmeContent = genMkdn.generateMarkdown(answers);
        writeToFile(answers.fileName, readmeContent);
    })
}

// Function call to initialize app
init();
