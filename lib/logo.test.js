const fs = require('fs');
const LogoGenerator = require('../lib/logo');

describe('LogoGenerator', () => {
  describe('saveSVGToFile', () => {
    it('should save SVG content to a file', () => {
      const text = 'ABC';
      const textColor = 'black';
      const shapeType = 'circle';
      const shapeColor = 'red';
      const fileName = 'test.svg';

      const logoGenerator = new LogoGenerator(text, textColor, shapeType, shapeColor);
      logoGenerator.saveSVGToFile(fileName);

      // Read the content of the saved file
      const savedContent = fs.readFileSync(fileName, 'utf8');

      // Ensure the saved content includes the expected SVG elements
      expect(savedContent).toContain('<text x="50%" y="50%"');
      expect(savedContent).toContain(`<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`);
    });
  });
});
