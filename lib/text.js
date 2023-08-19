// Text Class
class Text {
    // constructor method
    constructor(characters, textColor) {
        this.characters = characters;
        this.textColor = textColor;
    }

    // render method
    render() {
        return `<text x="50%" y="50%" font-size="60" dominant-baseline="middle"
        text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
    }
}

// export Text class
module.exports = Text;