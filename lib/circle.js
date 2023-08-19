// import Shapes class
const Shapes = require('./shapes.js');

// Circle class
class Circle extends Shapes {
    // constructor method
    constructor(color) {
        super(color);
    }

    // render method
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
    }
}

// export Circle class
module.exports = Circle;