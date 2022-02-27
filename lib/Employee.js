const inquirer = require('inquirer');
const generateTeamRoster = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site.js');

class Employee {
    constructor() {
        this.name;
        this.employeeId;
        this.email;
        this.employee;
        this.role;
    }

    getName() {
        inquirer
        .prompt({
          type: 'text',
          name: 'name',
          message: "What is the Employee's name?"
        })
        .then(({ name }) => {
            this.employee = new Employee(name);
            this.getId();
        });
    }

    getId() {
        inquirer
        .prompt({
          type: 'text',
          name: 'employeeId',
          message: "What is their employee ID?"
        })
        .then(({ employeeId }) => {
            this.employee = new Employee(employeeId);
            this.getEmail();
        });
    }

    getEmail() {
        inquirer
        .prompt({
          type: 'text',
          name: 'email',
          message: "What is the Employee's email address?"
        })
        .then(({ email }) => {
            this.employee = new Employee(email);
            this.getRole();
        });
    }

    getRole() {
        return {
            role: 'Employee',
        }
    };  
}

module.exports = Employee;