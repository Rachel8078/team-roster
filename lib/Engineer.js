class Engineer {
    constructor(name = '') {
        this.name = name;
    } 

    engineerInfo() {
        return {
            id: this.id,
            email: this.email,
            github: this.github,
        }
    }
}

module.exports = Engineer;

const promptEngineer = (employeeData) => {
    console.log(`
---------------------------
 Adding Engineer to Roster
---------------------------
    `);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
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
            name: 'engineerId',
            message: "What is the engineer's employee ID?",
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
            name: 'engineerEmail',
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
            message: "What is the engineer's GitHub username?",
            validate: githubInput => {
              if (githubInput) {
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
      promptEngineer();
  } else if(position === 'Intern') {
      promptIntern();
  } else if(position === 'Finished Building Team') {
      console.log("Done building team!")
      return generateTeamRoster(employeeData);
  }
});
};