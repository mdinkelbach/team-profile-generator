const Employee = require("./employee");

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        super(empName, id, email)
        this.officeNumber = officeNumber;
        this.role = 'Manager'
    }

    getRole() {
        console.log(this.officeNumber)
        console.log(this.role)
    }
}

//const employee1 = new Manager('Tot', 15, 'Tot@tot.com', 5)

//employee1.getName();


module.exports = {
    Manager : Manager,
    Employee: Employee
  }