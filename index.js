const inquirer = require("inquirer");
const Manager = require("./lib/manager").Manager;
const Employee = require("./lib/employee").Employee;


function begin() {
    console.log('Manager')
    const manager = new Manager()
    manager.getName();
}

begin();