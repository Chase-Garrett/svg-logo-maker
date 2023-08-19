// Text Class
class Text {
    // constructor method
    constructor(characters, textColor, shape) {
        this.characters = characters;
        this.textColor = textColor;
        this.shape = shape;
    }

    // render method
    render() {
        if (this.characters.length > 3) {
            throw new Error('Please enter up to 3 characters for the logo');
        } else if (this.shape === 'circle') {
            return `<text x="150" y="100" fill="${this.textColor}" font-size="80" text-anchor="middle" dominant-baseline="central">${this.characters}</text>`;
        } else if (this.shape === 'square') {
            return `<text x="150" y="100" fill="${this.textColor}" font-size="80" text-anchor="middle" dominant-baseline="central">${this.characters}</text>`;
        } else if (this.shape === 'triangle') {
            return `<text x="150" y="100" fill="${this.textColor}" font-size="80" text-anchor="middle" dominant-baseline="central">${this.characters}</text>`;
        }
    }
}

// export Text class
module.exports = Text;