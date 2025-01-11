const canIterate = require('../app');

describe('canIterate', () => {
    it('should return true for Map', () => {
        expect(
            canIterate(new Map())
        ).toBe(true);
    });

    it('should return true for Set', () => {
        expect(
            canIterate(new Set())
        ).toBe(true);
    });

    it('should return false for null', () => {
        expect(
            canIterate(null)
        ).toBe(false);
    });

    it('should return false for a number', () => {
        expect(
            canIterate(10)
        ).toBe(false);
    });

    it('should return true for a string', () => {
        expect(
            canIterate("Netology")
        ).toBe(true);
    });

    it('should return false for an object without Symbol.iterator', () => {
        expect(
            canIterate({})
        ).toBe(false);
    });

    it('should return false for undefined', () => {
        expect(
            canIterate(undefined)
        ).toBe(false);
    });

    it('should return false for a boolean', () => {
        expect(
            canIterate(true)
        ).toBe(false);
    });

    it('should return false for a function', () => {
        expect(
            canIterate(() => {})
        ).toBe(false);
    });
});
