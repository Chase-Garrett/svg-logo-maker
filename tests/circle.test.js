// import cicrle class
const Circle = require('../lib/shapes/circle');

// test circle class
describe('Circle', () => {
    test('should return a circle svg element', () => {
        const circle = new Circle('red').render();
        expect(circle).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
});