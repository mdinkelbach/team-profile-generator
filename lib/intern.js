const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./employee");
const Engineer = require("./engineer");

let role = '';
let school = '';
let bottomPh = '';

class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);
        this.school = school;
        this.role = 'Intern';
    }

    getRole() {
      fs.appendFile('./dist/test.html', `  <h2 class="text">${this.role}</h2>\n`, (err) =>
      err ? console.error(err) : role = '');
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
      fs.appendFile('./dist/test.html', `  <h2 class="text">${data.school}</h2>\n  </div>\n`, (err) =>
      err ? console.error(err) : school = '');
        moreEmp()
      });
    }
}

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
      if (data.choice === 'Intern') {
        const intern = new Intern()
        intern.getName();
      } else if (data.choice === 'Engineer') {
        const engineer = new Engineer()
        engineer.getName();
      } else {
        console.log('File Complete!')
        fs.appendFile('./dist/test.html', bottom(), (err) =>
        err ? console.error(err) : bottomPh = '');
      }
    });
}

const bottom = () => 
`</section>
</section>

</body>
</html>`

module.exports = {
    Intern : Intern,
    Employee : Employee
  }