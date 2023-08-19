// import dependencies
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Text = require('./text.js');

// create document function
function createDocument(characters, textColor, shape, shapeColor) {
    // set shapes variable to the render method of the corresponding shape class
    const shapes = (() => {
        switch (shape) {
            case 'circle':
                return new Circle(shapeColor).render();
            case 'square':
                return new Square(shapeColor).render();
            case 'triangle':
                return new Triangle(shapeColor).render();
            default:
                throw new Error('Please choose a valid shape');
        }
    })();
    
    // set text variable to the render method of the Text class
    const text = new Text(characters, textColor, shape).render();

    // return svg document
    return `<svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="300" height="200">
    ${shapes}
    ${text}
    </svg>
    `;
}

// export create document function
module.exports = { createDocument };