// import shape classes
const Shapes = require('../lib/shapes');

// test shapes class
describe('Shapes', () => {
    test('should throw an error is render() is called', () => {
        const shapes = new Shapes('yellow').render();
        const err = new Error('Child class must implement a render() method.');
        expect(shapes.render).toThrow(err);
    });
});