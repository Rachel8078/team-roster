class Manager {
    constructor(name = '') {
        this.name = name;
    } 

    managerInfo() {
        return {
            id: this.id,
            email: this.email,
            office: this.office,
        }
    }
}

module.exports = Manager;