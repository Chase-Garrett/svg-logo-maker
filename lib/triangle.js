// import Shapes class
const Shapes = require('./shapes.js');

// Triangle class
class Triangle extends Shapes{
    // constructor method
    constructor(color) {
        super(color);
    }

    // render method
    render() {
        return `<polygon points="150,20 220,180 80,180" fill="${this.color}"/>`;
    }
}

// export Triangle class
module.exports = Triangle;