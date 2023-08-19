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

// export Shapes class
module.exports = Shapes;