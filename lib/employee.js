const inquirer = require("inquirer");
const fs = require('fs');

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
      fs.appendFile('./dist/test.html', `  <div class="card">\n  <h2 class="text">${data.name}</h2>\n`, (err) =>
      err ? console.error(err) : empName = '');
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
      fs.appendFile('./dist/test.html', `  <p class="text">Employee ID: ${data.id}</p>\n`, (err) =>
      err ? console.error(err) : id = '');
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
      fs.appendFile('./dist/test.html', `  <p class="text">Email: <a href = "mailto: ${data.email}">${data.email}</a></p>\n`, (err) =>
      err ? console.error(err) : email = '');
        this.getRole();
      });
    }

    getRole() {
      return console.log(this.role)
    }
}

module.exports = Employee;