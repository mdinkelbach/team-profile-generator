const inquirer = require("inquirer");
const Employee = require("./employee");
const Intern = require("./intern").Intern;

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
        moreEmp()
      });
    }
}

function moreEmp() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Would you like to add more employees to this Manager?",
        choices: ["Engineer","Intern","None"]
        //validate: val => /[a-z]/gi.test(val),          
      }
    ])
    .then((data) => {
      if (data.choice === 'Engineer') {
          const engineer = new Engineer()
          engineer.getName();
      } else if (data.choice === 'Intern') {
          const intern = new Intern()
          intern.getName();
      } else {
          console.log('done')
      }
    });
}

module.exports = {
    Engineer : Engineer,
    Employee : Employee
  }