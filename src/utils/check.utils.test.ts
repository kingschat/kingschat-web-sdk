import { validCallbackFunction, validRefreshAuthTokenRequestI } from './check.utils';
import { refreshAuthTokenRequestI } from '../interfaces';

describe('valid callback as a function', () => {
  it('should return true for function', () => {
    const fun = () => {};
    expect(validCallbackFunction(fun)).toBe(true);
  });

  it('should throw an Error for defined notFunctions & true boolean', () => {
    const definedTestData: Array<any> = [
      'string',
      { object: true },
      ['array'],
      true,
      12,
      12.34,
      0x123,
      Symbol('abc'),
      new Error('123abc'),
    ];

    definedTestData.forEach(item => {
      expect(() => {
        validCallbackFunction(item);
      }).toThrowError(
        new Error(`callbackFunction is type of ${typeof item} instead of function`)
      );
    });
  });

  it('should throw an Error for not defined types & false boolean', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        validCallbackFunction(item);
      }).toThrowError(new Error('callbackFunction is not defined!'));
    });
  });
});

describe('valid requestAuthTokenRequest as a refreshAuthTokenRequestI', () => {
  it('should return true for valid data', () => {
    const requestAuthTokenRequest: refreshAuthTokenRequestI = {
      refreshToken: `GEJ/fENK+cUC5ggLQNiLiIsovOo5OYaNSW/ss+6KyVo=`,
      clientId: 'e47a90db-f2a6-4690-91a6-c3e5420a27d9',
    };
    expect(validRefreshAuthTokenRequestI(requestAuthTokenRequest)).toBe(true);
  });
});
