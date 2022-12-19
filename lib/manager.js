const inquirer = require("inquirer");
const Employee = require("./employee");
const Engineer = require("./engineer").Engineer;
const Intern = require("./intern").Intern;

let officeNumber = '';

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        super(empName, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getRole() {
        console.log(this.role)
        this.getOfficeNumber();
    }

    getOfficeNumber() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "officeNumber",
          message: "Office Number?",
          //validate: val => /[a-z]/gi.test(val),          
        }
      ])
      .then((data) => {
        officeNumber = data.officeNumber;
        console.log(officeNumber)
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
    Manager : Manager,
    Employee : Employee
  }