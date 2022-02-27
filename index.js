const inquirer = require('inquirer');
const generateTeamRoster = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const employees = [];

const promptManager = () => {
    console.log(`
----------------------------------------------------------
           Welcome to the Team Roster Builder!
        
           Please add a Team Manager to begin.
----------------------------------------------------------
        `);
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee id?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Required");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Required");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'office',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Required");
                    return false;
                }
            }
        },
    ])
        .then((manager) => {
            //console.log(manager)
            const managerInfo = new Manager(manager.name, manager.id, manager.email, manager.office)
            // push manager to a global array
            employees.push(manager);
            //console.log(employees);
            promptAnother()
        }
        )
}
const promptEngineer = () => {
    console.log(`
---------------------------------------------
     Adding Engineer to the Team Roster
---------------------------------------------
            `);
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's Github username?",
                validate: githubInput => {
                    if (githubInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
        ])
            .then((engineer) => {
                console.log(engineer)
                const engineerInfo = new Engineer(engineer.name, engineer.id, engineer.email, engineer.office)
                // push engineer to a global array
                employees.push(engineer);
                //console.log(employees);
                promptAnother()
            }
            )
}

const promptIntern = () => {
    console.log(`
---------------------------------------------
    Adding Intern to the Team Roster
---------------------------------------------
            `);
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee id?",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the intern attend?",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Required");
                        return false;
                    }
                }
            },
        ])
            .then((intern) => {
                console.log(intern)
                const internInfo = new Intern(intern.name, intern.id, intern.email, intern.office)
                // push manager to a global array
                employees.push(intern);
                // console.log(employees);
                promptAnother()
            }
            )
}

const promptAnother = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: "Which employee type would you like to add to the team?",
            choices: ["Engineer", "Intern", "Finished Building Team"],
        }
    ])
        .then(({ position }) => {
            if (position === 'Engineer') {
                promptEngineer();

            } else if (position === 'Intern') {
               promptIntern();

            } else if (position === 'Finished Building Team') {
                console.log("Done creating Team Roster!")
                const teamRoster = generateTeamRoster(employees);
                writeFile(teamRoster);
                copyFile();
            }
        })

}

promptManager()