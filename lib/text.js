// Text Class
class Text {
    // constructor method
    constructor(characters, textColor) {
        this.characters = characters;
        this.textColor = textColor;
    }

    // render method
    render() {
        if (this.characters.length > 3) {
            throw new Error('Please enter up to 3 characters for the logo');
        }
        return `<text x="50%" y="50%" font-size="60" dominant-baseline="middle"
        text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
    }
}

// export Text class
module.exports = Text;