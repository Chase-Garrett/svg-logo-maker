// Shapes class
class Shapes {
    // constructor method
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }

    // render method
    render() {
        if (this.shape === 'circle') {
            return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`;
        } else if (this.shape === 'square') {
            return `<rect x="50" y="50" width="200" height="100" fill="${this.color}"/>`;
        } else if (this.shape === 'triangle') {
            return `<polygon points="150,20 220,180 80,180" fill="${this.color}"/>`;
        }
    }
}

// export Shapes class
module.exports = Shapes;