// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    return `license badge`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    return `license link`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `## License

Text explaining what the license covers`;
};

// TODO: Create a function that returns a table of contents
function renderTable() {

    return `Testing table of contents`;

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

![GitHub License](${renderLicenseBadge(data.license)})
${renderLicenseLink(data.license)}

## Description

${data.description}

## Table of Contents

${renderTable()}

## Installation

To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:
\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions about this repository, please open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.username}](https://github.com/${data.username}) on GitHub.

`;
}

module.exports = generateMarkdown;
