// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

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
    name: "screenshot",
    message:
      "Please provide the relative path to the image you want to use as the screenshot.",
  },
  {
    type: "input",
    name: "link",
    message:
      "Please provide a URL where a user can access your deployed application.",
  },
  {
    type: "input",
    name: "features",
    message: "List some features for this project.",
  },
  {
    type: "input",
    name: "require",
    message: "List any dependencies here.",
  },
  {
    type: "input",
    name: "usage",
    message: "What were the languages or technologies used for this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your Github Username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use Github Username)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: [
      "MIT",
      "APACHE2.0",
      "Boost1.0",
      "MPL2.0",
      "OSL-3.0",
      "Unlicense",
      "None",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("File written successfully!");
      }
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }))
      .then((message) => {
        console.log(message);
      })
      .catch((error) => {
        console.error("Error writing file:", error);
      });
  });
}

// Function call to initialize app
init();
