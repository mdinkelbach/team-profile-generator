const inquirer = require("inquirer");
const Employee = require("./employee");
const Engineer = require("./engineer");

let school = '';

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);
        this.school = school;
        this.role = 'Intern';
    }

    getRole() {
        console.log(this.role)
        this.getSchool();
    }

    getSchool() {
        return inquirer
      .prompt([
        {
          type: "input",
          name: "school",
          message: "School?",
          //validate: val => /[a-z]/gi.test(val),          
        }
      ])
      .then((data) => {
        school = data.school;
        console.log(school)
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
      if (data.choice === 'Intern') {
        const intern = new Intern()
        intern.getName();
      } else if (data.choice === 'Engineer') {
        const engineer = new Engineer()
        engineer.getName();
      } else {
        console.log('done')
      }
    });
}

module.exports = {
    Intern : Intern,
    Employee : Employee
  }