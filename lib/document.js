// import dependencies
const Shapes = require('./shapes');
const Text = require('./text');

// create document function
function createDocument(characters, textColor, shape, shapeColor) {
    const shapes = new Shapes(shape, shapeColor).render();
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