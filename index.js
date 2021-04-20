// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const jest = require('jest');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

// An array of questions for general employee
const teamMembers = [];

//create a manager function that runs inquireer
function createManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is the manager's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is the employee's id?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is the employee's email?",
                name: 'email',
            },
            {
                type: 'input',
                message: "What is your office number?",
                name: 'office',
            }
        ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.office)
            teamMembers.push(manager)
            createTeam();
        }
        )
}

// Inquirer question that lets user choose more team members and get directed to further questions, or to finish the team 
function createTeam() {
    inquirer
     .prompt([
         {
           type: "list",
           message: "Which team member would you like to add?",
           name: "option",
           choices: ["Engineer", "Intern", "The team is complete"]
         }
     ])
      .then((choice) => {
          if (choice.option === "Engineer") {
              engineerQuestions();
          } else if (choice.option === "Intern") {
              internQuestions();
          } else if (choice.option === "The team is complete") {
              writeHTML();
          }
      })
}

// Engineer inquirer questions that get pushed into members array when answered
function engineerQuestions() {
    inquirer
     .prompt([
         {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
         },
         {
            type: "input",
            message: "What is the engineer's employee ID?",
            name: "id"
         },
         {
            type: "input",
            message: "What is the engineer's email address?",
            name: "email"
         },
         {
            type: "input",
            message: "What is the engineer's GitHub username?",
            name: "github"
         }
     ])
     .then((answer) => {
        const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        teamMembers.push(engineer);
        createTeam();
     })
}

// Intern inquirer questions that get pushed into members array when answered
function internQuestions() {
    inquirer 
    .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "name"
        },
        {
          type: "input",
          message: "What is the intern's employee ID?",
          name: "id"
        },
        {
          type: "input", 
          message: "What is the intern's email address?",
          name: "email"
        },
        {
          type: "input", 
          message: "What is the intern's school?",
          name: "school"
        }
    ])
    .then((answer) => {
        const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
        teamMembers.push(intern);
        createTeam();
    })
}
createManager();



// Function to write HTML file
function writeToFile(fileName, template) {
    fs.writeFile(fileName, template, function(err) {
        console.log(fileName);

        if (err) {
            return console.log(err);
        } else {
            return console.log("The team is complete!");
        }
    })
}

// Function that connects user inputs to generated HTML
function writeHTML() {
    let html = generateHTML(teamMembers);
    writeToFile('./dist/team.html', html);
}

