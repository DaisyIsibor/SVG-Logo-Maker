
const inquirer = require("inquirer");
const LogoGenerator = require("./lib/logo");

function main() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",

        message: "Enter logo text (up to three characters):",


        message: "Enter up to three characters for the logo text:",
        validate: function (input) {
          return input.length > 0 && input.length <= 3;
        },
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color (keyword or hexadecimal number):",
      },
      {
        type: "list",
        name: "shapeType",
        message: "Choose a shape:",
        choices: ["circle", "triangle", "square","pyramid","star"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color (keyword or hexadecimal number):",
      },
    ])
    .then((answers) => {
      const { text, textColor, shapeType, shapeColor } = answers;
      const logoGenerator = new LogoGenerator(text, textColor, shapeType, shapeColor);
      const fileName = "logo.svg";
      logoGenerator.saveSVGToFile(fileName);
      console.log("Generated", fileName);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

main();
