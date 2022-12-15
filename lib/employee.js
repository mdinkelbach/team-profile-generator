const inquirer = require("inquirer");
const engineer = require("./engineer");
const intern = require("./intern");
const manager = require("./manager");

let empName = '';
let id = '';
let email = '';

class Site {

    getname() {
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
      });
    }

    getRole() {

    }
}

module.exports = Site;