// I have created a function to generate markdown for README.
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // This section will account for the table of contents.
  const tableOfContents = data.tableOfContents
    .map((section) => `* [${section}](#${section.toLowerCase().replace(/\s+/g, '-')})`)
    .join('\n');

  const questionsSection = Object.entries(data)
    .filter(([key]) => key !== 'tableOfContents')
    .map(([key, value]) => `* **${key}:** ${value}`)
    .join('\n');

  // Created a section for visuals if screenshotPath is provided
  const visualsSection = data.screenshotPath ? `## Visuals\n\n![Screenshot]( ${data.screenshotPath} )` : '';

  // This is a template literal, this section of my code is creating a string that includes content of data.title within an H1 heading in Markdown.
  return `# ${data.title}

${licenseBadge}
${licenseLink}

## Description

${data.description}

## Table of Contents

${tableOfContents}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

${licenseSection}

${visualsSection}

## Questions

${questionsSection}

For questions, please contact me via:

- Github: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;

}

module.exports = generateMarkdown;


