// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
if (license !== "none") {
return `[License](https://choosealicense.com/licenses/${license}/)`;
}
return "";
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
if (license !== "none") {
  return `## This project is license under the [${license}](https://choosealicense.com/licenses/${license}/) license.`;
}
return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}
## Description
${data.description}
## Deployed Applicaton URL
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Table of Contents
* [Features](#features)
* [Languages & Dependecies](#languagesanddependecies)
* [How to use this application](#Howtousethisapplication)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)
## Features
${data.features}
## Languages and Dependecies
${data.require}
## How to use this application:
${data.usage}
## Contributions
${data.contributions}
## Testing
${data.test}
## Questions
Pleasae send any questions you may have [here](mailto:${data.email}?subject=[Github]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com${data.creator}).

`;
}

module.exports = generateMarkdown;
