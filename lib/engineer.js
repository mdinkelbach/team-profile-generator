const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./employee");
const Intern = require("./intern").Intern;

let role = '';
let github = '';
let bottomPh = '';

class Engineer extends Employee {
    constructor(empName, id, email, github) {
        super(empName, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

    getRole() {
      fs.appendFile('./dist/test.html', `  <p class="text">Position: ${this.role}</p>\n`, (err) =>
      err ? console.error(err) : role = '');
        this.getGithub();
    }

    getGithub() {
        return inquirer
      .prompt([
        {
          type: "input",
          name: "github",
          message: "Github Account?",
          //validate: val => /[a-z]/gi.test(val),          
        }
      ])
      .then((data) => {
      fs.appendFile('./dist/test.html', `  <p class="text">GitHub: <a href="https://github.com/${data.github}">${data.github}</a></p>\n  </div>\n`, (err) =>
      err ? console.error(err) : github = '');
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

const bottom = () => 
`</section>
</section>

</body>
</html>`

module.exports = {
    Engineer : Engineer,
    Employee : Employee
  }