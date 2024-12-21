// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {} //not using this function

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache_2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'BSD_2--Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
    case 'Boost_1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    case 'CC0-1.0':
      return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'EPL_2.0':
      return '[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)';
    case 'AGPL_v3':
      return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    case 'GPL_v2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
    case 'LGPL_v2.1':
      return '[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)';
    case 'MPL_2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
    case 'Unlicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'None':
      return '![License: None](https://img.shields.io/badge/license-None-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${license} - see the [LICENSE](LICENSE) file for details.`;
  } else {
    return 'There is no license for this project.';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContents = data.toc ? `
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Tests](#tests)
- [Questions](#questions)
  ` : '';

  return `# ${data.title}

  ## Description
  ${data.description}

  ${tableOfContents}

  ## [Installation](#installation)
  ${data.installation}

  ## [Usage](#usage)
  ${data.usage} View a demo of the application here: [Youtube Demo Video](https://youtu.be/cJ-1MPcsW_U).

  ## [Credits](#credits)
  ${data.credits}
  
  ## [License](#license)
  ${renderLicenseSection(data.license)}

  ## [Badges](#badges)
  ${renderLicenseLink(data.license)}

  ## [Tests](#tests)
  ${data.tests}
  
  ## [Questions](#questions)
  If you have any questions, please feel free to reach out to me at ${data.email} or visit my [GitHub Profile](${data.gitHub}).

`;
}

export default generateMarkdown;