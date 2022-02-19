class Employee {
    constructor(name) {
        this.position = ['manager', 'engineer', 'intern']
    }

    finishTeam() {
        if (this.done === true) {
            return true;
        }
    }
}

module.exports = Employee;