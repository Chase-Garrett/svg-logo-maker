// import shape classes
const Shapes = require('../lib/shapes.js');

// test shapes class
describe('Shapes', () => {
    test('should throw an error when render() is called', () => {
        const shapes = new Shapes('yellow').render();
        const err = new Error('Child class must implement a render() method.');
        expect(shapes.render()).toThrow(err);
    });
});