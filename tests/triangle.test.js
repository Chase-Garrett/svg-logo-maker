// import triangle class
const Triangle = require('../lib/shapes.js');

// test triangle class
describe('Triangle', () => {
    test('should return a triangle svg element', () => {
        const triangle = new Triangle('green').render();
        expect(triangle).toEqual('<polygon points="150,20 220,180 80,180" fill="green" />');
    });
});