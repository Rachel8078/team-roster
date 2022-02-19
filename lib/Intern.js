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