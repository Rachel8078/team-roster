class Intern {
    constructor(name = '') {
        this.name = name;
    } 

    internInfo() {
        return {
            id: this.id,
            email: this.email,
            school: this.school,
        }
    }
}

module.exports = Intern;

const promptIntern = (employeeData) => {
    console.log(`
  ---------------------------
    Adding Intern to Roster
  ---------------------------
    `);
  
    return inquirer
    .prompt([
          {
              type: 'input',
              name: 'iternName',
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
              name: 'internId',
              message: "What is the intern's employee ID?",
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
              name: 'internEmail',
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
              message: "What is the intern's school?",
              validate: schoolInput => {
                if (schoolInput) {
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
  }