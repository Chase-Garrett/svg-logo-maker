// Shapes class
class Shapes {
    // constructor method
    constructor(color) {
        this.color = color;
    }

    // render method
    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

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

// export Shapes class
module.exports = Shapes;

// export Circle class
module.exports = Circle;

// export Square class
module.exports = Square;

// export Triangle class
module.exports = Triangle;