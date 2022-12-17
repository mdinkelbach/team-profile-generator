const inquirer = require("inquirer");
const Employee = require("./employee");

let github = '';

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
        return inquirer
      .prompt([
        {
          type: "input",
          name: "github",
          message: "Github Account?",
          //validate: val => /[a-z]/gi.test(val),          
        }
      ])
      .then((data) => {
        github = data.github;
        console.log(github)
      });
    }
}

module.exports = {
    Engineer : Engineer,
    Employee : Employee
  }