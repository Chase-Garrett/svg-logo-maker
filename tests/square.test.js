// import square class
const Square = require('../lib/square.js');

// test square class
describe('Square', () => {
    test('should return a square svg element', () => {
        const square = new Square('blue').render();
        expect(square).toEqual('<rect x="50" y="50" width="200" height="100" fill="blue"/>');
    });
});