// import statements
const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

// CLI class
class CLI {
    // constructor method
    constructor() {
    }

    // run method
    run() {
        // inquirer prompt
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'characters',
                    message: 'Please enter up to 3 characters for the logo',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Please enter a text color for the logo using a color name or hexidecimal',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose a shape for the logo',
                    choices: ['circle', 'square', 'triangle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Please enter a shape color for the logo using a color name or hexadecimal',
                },
            ])
            .then(({ characters, textColor, shapeColor, shapeColor }) => {
                this.characters = characters;
                this.textColor = textColor;
                this.shape = shape;
                this.shapeColor = shapeColor;
                return writeFile(
                    join(__dirname, '..', 'output', 'logo.svg'),
                    createDocument(this.characters, this.textColor, this.shape, this.shapeColor)
                );
            })
            .then(() => console.log('Generated logo.svg'))
            .catch((err) => {
                console.log(err);
                console.log('Something went wrong.');
            });
        }
}