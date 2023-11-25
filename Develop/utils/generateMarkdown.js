// I have created a function that returns a license badge based on which license is passed in
// If there is no license, then it will return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  //This section will map your license choices to corresponding badge URLs 
  const licenseBadgeMap = {
    MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    Apache: 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
    GPL: 'https://img.shields.io/badge/License-GPL%20v3-blue.svg',
  };

  return `[License Badge](${licenseBadgeMap[license]})`;
}

// I have created a function that returns the license link
// If there is no license, the it will return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  //This section will Map your license choices to corresponding license texts 
  const licenseLinkMap = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GPL: 'https://www.gnu.org/licenses/gpl-3.0.html',
  };

  return `[License Link](${licenseLinkMap[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
