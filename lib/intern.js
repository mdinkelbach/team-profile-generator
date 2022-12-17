const Employee = require("./employee");

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
        console.log(this.school)
    }
}

module.exports = {
    Intern : Intern,
    Employee : Employee
  }