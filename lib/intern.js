const inquirer = require("inquirer");
const Employee = require("./employee");

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
      });
    }
}

module.exports = {
    Intern : Intern,
    Employee : Employee
  }