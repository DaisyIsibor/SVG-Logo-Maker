// lib/logo.js

const fs = require("fs");

class LogoGenerator {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }

  generateSVG() {
    let svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    // Add shape based on user input
    switch (this.shapeType) {
    case "circle":
        svg += `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
        break;
    case "triangle":
        svg += `<polygon points="150,20 230,180 70,180" fill="${this.shapeColor}" />`;
        break;
    case "square":
        svg += `<rect x="50" y="50" width="200" height="100" fill="${this.shapeColor}" />`;
        break;
    default:
        break;
    }

    // Add text to SVG
    svg += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    svg += `</svg>`;
    return svg;
}

saveSVGToFile(fileName) {
    const svgContent = this.generateSVG();
    fs.writeFileSync(fileName, svgContent);
}
}

module.exports = LogoGenerator;
