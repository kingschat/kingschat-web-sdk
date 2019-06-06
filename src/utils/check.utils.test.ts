import { validEnvironment, validRefreshAuthenticationTokenOptionsI } from './check.utils';
import { refreshAuthenticationTokenOptionsI } from '../interfaces';

describe('valid environment as a string', () => {
  it("shouldn't throw an error on valid string", () => {
    const allowedEnvironments: Array<any> = ['dev', 'staging', 'prod', undefined, null];
    allowedEnvironments.forEach(environment => {
      expect(validEnvironment(environment));
    });
  });

  it('should throw an error on valid value', () => {
    const allowedEnvironments: Array<any> = ['devv', 1, () => {}];
    allowedEnvironments.forEach(environment => {
      expect(() => {
        validEnvironment(environment);
      }).toThrowError(Error('environment is invalid'));
    });
  });
});

describe('valid refreshAuthenticationTokenOptions as a refreshAuthenticationTokenOptionsI', () => {
  const refreshAuthenticationTokenOptions: refreshAuthenticationTokenOptionsI = {
    refreshToken: `GEA/fENK+cUC5ggLQNiLiIsovOo5OYaNSW/ss+6KyVo=`,
    clientId: 'a1234567-abcd-1234-abcd-12345abc1234',
  };

  it("shouldn't throw an error for valid data", () => {
    expect(validRefreshAuthenticationTokenOptionsI(refreshAuthenticationTokenOptions));
  });

  it('should throw an Error for non defined refreshAuthenticationTokenOptions', () => {
    expect(() => {
      // @ts-ignore
      validRefreshAuthenticationTokenOptionsI(undefined);
    }).toThrowError(Error('refreshAuthenticationTokenOptions are not defined!'));
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
      Error('123abc'),
    ];
    definedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthenticationTokenOptionsI({ clientId: item });
      }).toThrowError(Error(`clientId is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean clientId', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthenticationTokenOptionsI({ clientId: item });
      }).toThrowError(Error('clientId is not defined!'));
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
      Error('123abc'),
    ];
    definedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthenticationTokenOptionsI({
          clientId: refreshAuthenticationTokenOptions.clientId,
          refreshToken: item,
        });
      }).toThrowError(Error(`refreshToken is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean refreshToken', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthenticationTokenOptionsI({
          clientId: refreshAuthenticationTokenOptions.clientId,
          refreshToken: item,
        });
      }).toThrowError(Error('refreshToken is not defined!'));
    });
  });
});
