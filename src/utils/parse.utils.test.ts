/*eslint-disable*/
import { parseArrayToString } from './parse.utils';

describe('parsing utility', () => {
  describe('array to string', () => {
    it('should refuse to parse any defined no array', () => {
      const definedTestData: Array<any> = [
        'string',
        { object: true },
        true,
        12,
        12.34,
        0x123,
        Symbol('abc'),
        new Error('123abc'),
        function() {},
      ];
      definedTestData.forEach(item => {
        expect(() => {
          // @ts-ignore
          parseArrayToString(item);
        }).toThrowError(
          new Error(`callbackFunction is type of ${typeof item} instead of Array`)
        );
      });
    });

    it('should refuse to parse any no defined values', () => {
      const notDefinedTestData: Array<any> = [null, undefined, false];

      notDefinedTestData.forEach(item => {
        expect(() => {
          parseArrayToString(item);
        }).toThrowError(new Error('arrayToParse is not defined!'));
      });
    });

    it('should parse empty array to string', () => {
      expect(parseArrayToString([])).toBe('[]');
    });

    it('should parse array with one element to string', () => {
      expect(parseArrayToString(['test'])).toBe('["test"]');
    });

    it('should parse array with many element to string', () => {
      expect(parseArrayToString(['test', 'test1', 'test2'])).toBe(
        '["test", "test1", "test2"]'
      );
    });
  });
});
