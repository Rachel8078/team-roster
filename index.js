const inquirer = require('inquirer')
const generateTeamRoster = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

const promptUser = () => {
    console.log(`
----------------------------------------------------------
         Welcome to the Team Roster Builder!

         Please add a Team Manager to begin.
----------------------------------------------------------
        `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
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
            name: 'managerId',
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
            name: 'managerEmail',
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
        {
            type: 'list',
            name: 'position',
            message: "Which employee type would you like to add to the team?",
            choices: ["Engineer", "Intern", "Finished Building Team"],
        }
    ])
    .then(({ position }) => {
      if(position === 'Engineer') {
        //promptEngineer();
        console.log('engineer');
    } else if(position === 'Intern') {
        //promptIntern();
        console.log('intern');
    } else if(position === 'Finished Building Team') {
        console.log("Done building team!")

    }
  });
};

// function call to begin app
promptUser()
// send answers to file template
.then(employeeData => {
    return generateTeamRoster(employeeData);
})
// write the team roster file and insert in 'dist' folder
.then(teamRoster => {

    return writeFile(teamRoster);
})
  // catch errors
  .catch(err => {
    console.log(err);
  });
