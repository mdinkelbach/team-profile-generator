const Employee = require("./employee");

class Engineer extends Employee {
    constructor(empName, id, email, github) {
        super(empName, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getRole() {
        console.log(this.role)
        this.getGithub();
    }

    getGithub() {
        console.log(this.github)
    }
}

module.exports = {
    Engineer : Engineer,
    Employee : Employee
  }