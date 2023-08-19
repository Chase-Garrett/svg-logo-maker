// import text class
const Text = require('../lib/text');

// test text class
describe('Text', () => {
    test('should return a text svg element', () => {
        const text = new Text('ABC', 'white', 'circle').render();
        expect(text).toEqual('<text x="150" y="100" fill="white" font-size="60" text-anchor="middle" dominant-baseline="central">ABC</text>');
    });
});