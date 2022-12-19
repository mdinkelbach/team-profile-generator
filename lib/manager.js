const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./employee");
const Engineer = require("./engineer").Engineer;
const Intern = require("./intern").Intern;

let officeNumber = '';
let role = '';
let bottomPh = '';

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        super(empName, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }

    getRole() {
      fs.appendFile('./dist/test.html', `  <ppph3 class="text">Position: ${this.role}</p>\n`, (err) =>
      err ? console.error(err) : role = '');
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
      fs.appendFile('./dist/test.html', `  <p class="text">Office Number: ${data.officeNumber}</p>\n  </div>\n`, (err) =>
      err ? console.error(err) : officeNumber = '');
        moreEmp()
      });
    }
}

const bottom = () => 
`</section>
</section>

</body>
</html>`

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
        console.log('File Complete!')
        fs.appendFile('./dist/test.html', bottom(), (err) =>
        err ? console.error(err) : bottomPh = '');
      }
    });
}

module.exports = {
    Manager : Manager,
    Employee : Employee
  }