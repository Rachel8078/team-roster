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