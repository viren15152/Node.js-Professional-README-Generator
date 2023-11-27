// I have created a function that returns a license badge based on which license is passed in.
// If there is no license, then it will return an empty string.
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  //This section will map your license choices to corresponding badge URLs.
  const licenseBadgeMap = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    GPL: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
  };

  return `[License Badge](${licenseBadgeMap[license]})`;
}

// I have created a function that returns the license link.
// If there is no license, the it will return an empty string.
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  //This section will Map your license choices to corresponding license texts.
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

  //This section will map your license choices to corresponding license texts.
  const licenseTextMap = {
    MIT: 'This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.',
    Apache: 'This project is licensed under the Apache License 2.0 - see the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) for details.',
    GPL: 'This project is licensed under the GNU General Public License v3.0 - see the [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.html) for details.',
  };

  return `## License

${licenseTextMap[license]}`;
}

// I have created a function to generate markdown for README.
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license)
//This section will account for the table of contents 
  const tableOfContents = data.tableOfContents
    .map((section) => `* [${section}](#${section.toLowerCase().replace(/\s+/g, '-')})`) //.map() is a high order function that iterates over each element of an array and returns a new array with transformed elements.
    .join('\n');

    const questionsSection = Object.entries(data)
      .filter(([key]) => key !== 'tableOfContents')
      .map(([key, value]) => `* **${key}:** ${value}`) //`* **${key}: ${value}` is a template literal that creates a string. It's using string interpolation to insert key values of key and value into the string. 
      .join('\n');

      //This is a template literal, this section of my code is creating a string that includes content of data.title within an H1 heading in Markdown
  return `# ${data.title}

${licenseBadge}
${licenseLink}

## Description 

${data.description}

## Table of Contents 

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${licenseSection}
* [Questions](#questions)

## Installation 

${data.installation}

## Usage 

${data.contributing}

${licenseSection}

## Questions

${questionsSection}

For questions, please contact me via:

- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;

}

module.exports = generateMarkdown;
