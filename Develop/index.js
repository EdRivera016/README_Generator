// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer =require("inquirer");
const path = require("path");
const generateMarkdown = require(".utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "Please name your Project.",
},
{
    type: "input",
    name: "description",
    message: "Please describe the purpose and funcitonality of this project.",
},
{
    type: "input",
    name: ""
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
