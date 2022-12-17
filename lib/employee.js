const inquirer = require("inquirer");

let empName = '';
let id = '';
let email = '';

class Employee {
  constructor(empName, id, email) {
    this.empName = empName;
    this.id = id;
    this.email = email;
    this.role = 'Employee'
  }

    getName() {
      return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "Employee Name?",
          //validate: val => /[a-z]/gi.test(val),          
        }
      ])
      .then((data) => {
        empName = data.name;
        console.log(empName)
        this.getId();
      });
    }

    getId() {
      return inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Employee ID?",
          //validate: val => /[0-9]/gi.test(val),          
        }
      ])
      .then((data) => {
        id = data.id;
        console.log(id)
        this.getEmail();
      });
    }

    getEmail() {
      return inquirer
      .prompt([
        {
          type: "input",
          name: "email",
          message: "Employee Email?",
          //validate: val => /[a-z1-9@]/gi.test(val),          
        }
      ])
      .then((data) => {
        email = data.email;
        console.log(email)
        this.getRole();
      });
    }

    getRole() {
      return console.log(this.role)
    }
}

module.exports = Employee;