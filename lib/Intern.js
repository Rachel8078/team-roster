const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name) {
        super(name, id, email);

        this.school = ("");
    }

    getSchool() {
        inquirer
      .prompt({
        type: 'text',
        name: 'school',
        message: "What is the Intern's school name?"
      })
      .then(({ school }) => {
        return this.school;
      });
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;