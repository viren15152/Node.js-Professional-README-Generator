// This section includes packages needed for this application (require statement).
const inquirer = require('inquirer');
const fs = require('fs');

// I have created a function that returns a license badge based on which license is passed in.
// If there is no license, then it will return an empty string.
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // This section will map your license choices to corresponding badge URLs.
  const licenseBadgeMap = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    GPL: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
  };

  return `![License Badge](${licenseBadgeMap[license]})`;
}

// I have created a function that returns the license link.
// If there is no license, it will return an empty string.
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // This section will Map your license choices to corresponding license texts.
  const licenseLinkMap = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0.html',
  };

  return `[License Link](${licenseLinkMap[license]})`;
}

// I have created a function that returns the license section of README.
// If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // This section will map your license choices to corresponding license texts.
  const licenseTextMap = {
    MIT: 'This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.',
    Apache: 'This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) for details.',
    GPL: 'This project is licensed under the GNU General Public License v3.0 - see the [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.html) for details.',
  };

  return `## License\n\n${licenseTextMap[license]}`;
}

// I have created a function to generate markdown for README.

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // Define the order of sections in the table of contents
  const orderOfSections = [
    'Description',
    'Visuals',
    'Technologies Used',
    'Installation',
    'Usage',
    'Contributing',
    'License',
    'Contact',
  ];

  function renderContactSection(data) {
    return `
  For questions, please contact me via:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}`;
}

  // Created a section for visuals if screenshotPath is provided
  const visualsSection = data.screenshotPath ? `## ${orderOfSections[1]}\n\n![Screenshot](${data.screenshotPath})` : '';

  // This is a template literal, this section of my code is creating a string that includes content of data.title within an H1 heading in Markdown.
  return `# ${data.title}

${licenseBadge}
${licenseLink}

## Table of Contents

${orderOfSections
  .filter((section) => data.tableOfContents.includes(section))
  .map((section) => `* [${section}](#${section.toLowerCase().replace(/\s+/g, '-')})`)
  .join('\n')}

## ${orderOfSections[0]}

${data.description}

${visualsSection}

## ${orderOfSections[2]}

${data.technologiesUsed}

## ${orderOfSections[3]}

${data.installation}

## ${orderOfSections[4]}

${data.usage}

## ${orderOfSections[5]}

${data.contributing}

## ${orderOfSections[6]}

${licenseSection}

## ${orderOfSections[7]}

${renderContactSection(data)}

`;

}

module.exports = generateMarkdown;

