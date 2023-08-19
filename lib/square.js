// import Shapes class
const Shapes = require('./shapes.js');

// Square class
class Square extends Shapes{
    // constructor method
    constructor(color) {
        super(color);
    }

    // render method
    render() {
        return `<rect x="50" y="50" width="200" height="100" fill="${this.color}"/>`;
    }
}

// export Square class
module.exports = Square;