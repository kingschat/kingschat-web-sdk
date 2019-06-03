/*eslint-disable*/
import { parseScopesArrayToString } from './parse.utils';

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
          parseScopesArrayToString(item);
        }).toThrowError(new Error(`scopes are type of ${typeof item} instead of Array`));
      });
    });

    it('should refuse to parse any no defined values', () => {
      const notDefinedTestData: Array<any> = [null, undefined, false];

      notDefinedTestData.forEach(item => {
        expect(() => {
          parseScopesArrayToString(item);
        }).toThrowError(new Error('scopes are not defined!'));
      });
    });

    it('should parse empty array to string', () => {
      expect(parseScopesArrayToString([])).toBe('[]');
    });

    it('should parse array with one element to string', () => {
      expect(parseScopesArrayToString(['test'])).toBe('["test"]');
    });

    it('should parse array with many element to string', () => {
      expect(parseScopesArrayToString(['test', 'test1', 'test2'])).toBe(
        '["test", "test1", "test2"]'
      );
    });
  });
});
