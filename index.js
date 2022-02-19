const inquirer = require('inquirer')
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
    console.log(`
----------------------------------------------------------
         Welcome to the Team Roster Builder!
 Answer the following questions about your team to begin.
----------------------------------------------------------
        `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
        },
        {
            type: 'list',
            name: 'position',
            message: "Which employee type would you like to add to the team?",
            choices: ["Engineer", "Intern", "Finished Building Team"]
        },
    ]);
};

const promptPosition = teamData => {
    console.log(`
---------------------------
 Add Team Member to Roster
---------------------------
    `);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
            when: ({ position = Engineer }) => addEngineer
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee ID?",
            when: ({ position = Engineer }) => addEngineer
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
            when: ({ position = Engineer }) => addEngineer
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            when: ({ position = Engineer }) => addEngineer
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
            when: ({ position = Intern }) => addIntern
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee ID?",
            when: ({ position = Intern }) => addIntern
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
            when: ({ position = Intern }) => addIntern
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: ({ position = Intern }) => addIntern
        },
    ])   
}

promptUser()
.then(promptPosition)
