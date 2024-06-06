## SVG Logomaker

 ## Video link
  https://watch.screencastify.com/v/8sQMD112uyF62K96QFzT


[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-purple.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Table of Contents
- [Description](#description)
- [Task](#task)
- [Installation](#installation)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Description

SVG Logomaker is a Node.js command-line tool that empowers web developers to quickly generate custom SVG logos for their projects. With intuitive prompts for text, color, and shape selection, SVG Logomaker streamlines the logo creation process, enabling users to create professional-quality logos with ease.

This succinct description highlights the key features and benefits of your SVG Logomaker project in a clear and concise manner.

## Task

Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and passes all of the tests. You’ll need to submit a link to the video **and** add it to the README of your project.
## Installation

To install Notebook Planner, follow these steps:

Your application should use [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application will be invoked by using the following command:

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Usage

To use SVG Logomaker, follow these steps:

Open your terminal.
Navigate to the project directory.
Run node index.js to start the application.
Follow the prompts to select colors, shapes, and text for your logo.
Once you've entered input for all prompts, an SVG file named logo.svg will be created in the project directory.


## Tests

To run tests, follow these steps:

Open your terminal.
Navigate to the project directory.
Run npm test to run the test suite.


## Questions

- **GitHub**: [daisy isibor](https://github.com/daisy isibor)
- **Email**: daisyisibor9@gmail.com

## License
  This project is licensed under the [GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)