// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }

    if (license === 'MIT') {
        var badge = 'https://img.shields.io/badge/license-MIT-pink';
    }
    else if (license === 'APACHE 2.0') {
        var badge = 'https://img.shields.io/badge/license-Apache%202.0-pink';
    }
    else if (license === 'GPL 3.0') {
        var badge = 'https://img.shields.io/badge/license-GPL%203.0-pink';
    }
    else if (license === 'BSD 3') {
        var badge = 'https://img.shields.io/badge/license-BSD%203-pink';
    }

    return `![GitHub License Badge](${badge})`;
};

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }
    
    if (license === 'MIT') {
        var link = 'https://choosealicense.com/licenses/mit/';
    }
    else if (license === 'APACHE 2.0') {
        var link = 'https://choosealicense.com/licenses/apache-2.0/';
    }
    else if (license === 'GPL 3.0') {
        var link = 'https://choosealicense.com/licenses/gpl-3.0/';
    }
    else if (license === 'BSD 3') {
        var link = 'https://choosealicense.com/licenses/bsd-3-clause/';
    }

    return link;
};

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }

    return `## License

This project is covered under the [${license}](${renderLicenseLink(license)}) license.`;
};

// function that returns a table of contents
function renderTable(license) {

    // TODO!!!!!!!!!!

    if (license) {
        var list = ['installation', 'usage', 'license', 'contributing', 'tests', 'questions'];
    }
    else {
        var list = ['installation', 'usage', 'contributing', 'tests', 'questions'];
    }

    var table = '';

    for (var i=0; i < list.length; i++) {
        table += `* [${list[i].charAt(0).toUpperCase() + list[i].slice(1)}](#${list[i]})
`;
    };

    return table;

};

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${renderTable(data.license)}

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
