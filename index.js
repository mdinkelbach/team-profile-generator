const inquirer = require("inquirer");
const Manager = require("./lib/manager").Manager;
const Engineer = require("./lib/engineer").Engineer;
const Intern = require("./lib/intern").Intern;
const Employee = require("./lib/employee").Employee;


function begin() {
    console.log('Manager')
    const manager = new Manager()
    manager.getName();
}

begin();