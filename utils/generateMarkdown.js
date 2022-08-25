// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    return `license badge
`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }

    return `license link
`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `## License

Text explaining what the license covers
`;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderTable() {

    return `Testing table of contents
`;

};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

## Description

${data.description}

## Table of Contents

${renderTable()}

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Any questions?

Please contact me: [through GitHub](https://github.com/${data.username}) or [through email at ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
