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

describe('valid refreshAuthTokenRequest as a refreshAuthTokenRequestI', () => {
  const refreshAuthTokenRequest: refreshAuthTokenRequestI = {
    refreshToken: `GEA/fENK+cUC5ggLQNiLiIsovOo5OYaNSW/ss+6KyVo=`,
    clientId: 'a1234567-abcd-1234-abcd-12345abc1234',
  };
  it('should return true for valid data', () => {
    expect(validRefreshAuthTokenRequestI(refreshAuthTokenRequest)).toBe(true);
  });

  it('should throw an Error for non strings defined clientId', () => {
    const definedTestData: Array<any> = [
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
        // @ts-ignore
        validRefreshAuthTokenRequestI({ clientId: item });
      }).toThrowError(new Error(`clientId is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean clientId', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthTokenRequestI({ clientId: item });
      }).toThrowError(new Error('clientId is not defined!'));
    });
  });

  it('should throw an Error for non strings defined refreshToken', () => {
    const definedTestData: Array<any> = [
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
        // @ts-ignore
        validRefreshAuthTokenRequestI({
          clientId: refreshAuthTokenRequest.clientId,
          refreshToken: item,
        });
      }).toThrowError(
        new Error(`refreshToken is type of ${typeof item} instead of string`)
      );
    });
  });

  it('should throw an Error for not defined types & false boolean refreshToken', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthTokenRequestI({
          clientId: refreshAuthTokenRequest.clientId,
          refreshToken: item,
        });
      }).toThrowError(new Error('refreshToken is not defined!'));
    });
  });
});
