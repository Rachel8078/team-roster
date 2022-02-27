const Employee = require('./Employee');
const inquirer = require('inquirer');
const generateTeamRoster = require('../src/page-template');
const { writeFile, copyFile } = require('../utils/generate-site.js');

class Manager extends Employee {
    constructor (name) {
        super(name);

        this.officeNumber = ("");
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;