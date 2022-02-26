const inquirer = require('inquirer')
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');

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
            type: 'input',
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
        },
        {
            type: 'input',
            name: 'engineer-name',
            message: "What is the engineer's name?",
            when: ({ position }) => answers.position === "Engineer"
        },
        {
            type: 'input',
            name: 'engineer-id',
            message: "What is the engineer's employee ID?",
            when: ({ position }) => answers.position === "Engineer"
        },
        {
            type: 'input',
            name: 'engineer-email',
            message: "What is the engineer's email address?",
            when: ({ position }) => answers.position === "Engineer"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            when: ({ position }) => answers.position === "Engineer"
        },
        {
            type: 'input',
            name: 'intern-name',
            message: "What is the intern's name?",
            when: ({ position }) => answers.position === "Intern"
        },
        {
            type: 'input',
            name: 'intern-id',
            message: "What is the intern's employee ID?",
            when: ({ position }) => answers.position === "Intern"
        },
        {
            type: 'input',
            name: 'intern-email',
            message: "What is the intern's email address?",
            when: ({ position }) => answers.position === "Intern"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: ({ position }) => answers.position === "Intern"
        },
    ]);
};

// const promptPosition = teamData => {
//     console.log(`
// ---------------------------
//  Add Team Member to Roster
// ---------------------------
//     `);

//     return inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'engineer-name',
//             message: "What is the engineer's name?",
//             // when: ({ position = Engineer }) => addEngineer
//         },
//         {
//             type: 'input',
//             name: 'engineer-id',
//             message: "What is the engineer's employee ID?",
//             // when: ({ position = Engineer }) => addEngineer
//         },
//         {
//             type: 'input',
//             name: 'engineer-email',
//             message: "What is the engineer's email address?",
//             // when: ({ position = Engineer }) => addEngineer
//         },
//         {
//             type: 'input',
//             name: 'github',
//             message: "What is the engineer's GitHub username?",
//             // when: ({ position = Engineer }) => addEngineer
//         },
//         {
//             type: 'input',
//             name: 'intern-name',
//             message: "What is the intern's name?",
//             // when: ({ position = Intern }) => addIntern
//         },
//         {
//             type: 'input',
//             name: 'intern-id',
//             message: "What is the intern's employee ID?",
//             // when: ({ position = Intern }) => addIntern
//         },
//         {
//             type: 'input',
//             name: 'intern-email',
//             message: "What is the intern's email address?",
//             // when: ({ position = Intern }) => addIntern
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: "What is the intern's school?",
//            //  when: ({ position = Intern }) => addIntern
//         },
//     ])   
// }


// function call to begin app
promptUser()

// send answers to file template
.then(employeeData => {
    return generateTeamRoster(employeeData);
})

// write the team roster file and insert in 'dist' folder
.then(teamRoster => {
    console.log(teamRoster);
    return writeFile(teamRoster);
})

  // catch errors
  .catch(err => {
    console.log(err);
  });
