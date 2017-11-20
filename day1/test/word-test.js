const assert = require('chai').assert;
const words = require('../function');

describe("object testing", () => {
    it('Should return an object { hello: 1, world: 1, the: 1, cat: 1, sat: 1, on: 1, a: 1, mat: 1 }', () => {
        const result = words('hello world the cat sat on a mat')
        assert.deepEqual(result, { hello: 1, world: 1, the: 1, cat: 1, sat: 1, on: 1, a: 1, mat: 1 });
    });
    it('Should return an object { olly: 2, roam: 1, free: 1, in: 1, the: 1, dark: 1 }', () => {
        const result = words('olly olly roam free in the dark')
        assert.deepEqual(result, { olly: 2, roam: 1, free: 1, in: 1, the: 1, dark: 1 });
    });
    it('Should return a ssimple object { true: 1 }', () => {
        const result = words('true')
        assert.deepEqual(result, { true: 1 });
    });
    it('Should return a Invalid input message', () => {
        const result = words(12345)
        assert.deepEqual(result, 'Invalid Input');
    });
    it('Should return a Invalid input message', () => {
        const result = words(true)
        assert.deepEqual(result, 'Invalid Input');
    });
});