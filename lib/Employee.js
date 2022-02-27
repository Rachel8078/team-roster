const inquirer = require('inquirer');

class Employee {
    constructor(name) {
        this.name = ("");
        this.id = ("");
        this.email = ("");
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;