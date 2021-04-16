// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//const jest = require('jest');


// An array of questions for general employee
const employee = [

    {
        type: 'input',
        message: "What is the employee's name?",
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
    }
];
//manager questions or should I extend?
const manager = [

    {
        type: 'input',
        message: "What is your office number",
        name: 'name'
    },
];
    //engineer questions or should I extend?
    const engineer = [
    {
        type: 'input',
        message: "What is the emplyoe's github email?",
        name: 'id',
    },
];
    //student questions or should I extend?
const student = [
    {
        type: 'input',
        message: "What school is the Intern from?",
        name: 'email',
    }
];

//getName()

//getId()

//getEmail()

//getRole()

//getGithub()

//getSchool()

