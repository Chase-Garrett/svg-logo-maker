// import create document function
const { createDocument } = require('../lib/document.js');

// test create document function
describe('createDocument', () => {
    test('should return an svg document', () => {
        const document = createDocument('ABC', 'white', 'circle', 'red');
        expect(document).toEqual(`<svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="red"/>
    <text x="150" y="100" fill="white" font-size="60" text-anchor="middle" dominant-baseline="central">ABC</text>
    </svg>
    `);
    });
});