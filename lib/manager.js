const inquirer = require("inquirer");
const Employee = require("./employee");

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
      });
    }
}

module.exports = {
    Manager : Manager,
    Employee : Employee
  }