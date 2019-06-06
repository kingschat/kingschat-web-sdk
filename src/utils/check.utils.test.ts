import {
  validEnvironment,
  validLoginOptions,
  validRefreshAuthenticationTokenOptions,
  validSendMessageOptions,
} from './check.utils';
import {
  loginOptionsI,
  refreshAuthenticationTokenOptionsI,
  sendMessageOptionsI,
} from '../interfaces';

describe('valid environment as a env', () => {
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

describe('valid validLoginOptions as a loginOptionsI', () => {
  const loginOptions: loginOptionsI = {
    scopes: ['send_chat_message'],
    clientId: 'a1234567-abcd-1234-abcd-12345abc1234',
  };

  it("shouldn't throw an error for valid data", () => {
    expect(validLoginOptions(loginOptions));
  });

  it('should throw an Error for non defined loginOptions', () => {
    expect(() => {
      // @ts-ignore
      validLoginOptions(undefined);
    }).toThrowError(Error('loginOptions are not defined!'));
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
        validLoginOptions({ ...loginOptions, clientId: item });
      }).toThrowError(Error(`clientId is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean clientId', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validLoginOptions({ ...loginOptions, clientId: item });
      }).toThrowError(Error('clientId is not defined!'));
    });
  });

  it('should throw an Error for non Array defined scopes', () => {
    const definedTestData: Array<any> = [
      'string',
      { object: true },
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
        validLoginOptions({
          ...loginOptions,
          scopes: item,
        });
      }).toThrowError(Error(`scopes are type of ${typeof item} instead of Array`));
    });
  });

  it('should throw an Error for not defined types & false boolean scopes', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validLoginOptions({
          ...loginOptions,
          scopes: item,
        });
      }).toThrowError(Error('scopes are not defined!'));
    });
  });
});

describe('valid refreshAuthenticationTokenOptions as a refreshAuthenticationTokenOptionsI', () => {
  const refreshAuthenticationTokenOptions: refreshAuthenticationTokenOptionsI = {
    refreshToken: `GEA/fENK+cUC5ggLQNiLiIsovOo5OYaNSW/ss+6KyVo=`,
    clientId: 'a1234567-abcd-1234-abcd-12345abc1234',
  };

  it("shouldn't throw an error for valid data", () => {
    expect(validRefreshAuthenticationTokenOptions(refreshAuthenticationTokenOptions));
  });

  it('should throw an Error for non defined refreshAuthenticationTokenOptions', () => {
    expect(() => {
      // @ts-ignore
      validRefreshAuthenticationTokenOptions(undefined);
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
        validRefreshAuthenticationTokenOptions({
          ...refreshAuthenticationTokenOptions,
          clientId: item,
        });
      }).toThrowError(Error(`clientId is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean clientId', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validRefreshAuthenticationTokenOptions({
          ...refreshAuthenticationTokenOptions,
          clientId: item,
        });
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
        validRefreshAuthenticationTokenOptions({
          ...refreshAuthenticationTokenOptions,
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
        validRefreshAuthenticationTokenOptions({
          ...refreshAuthenticationTokenOptions,
          refreshToken: item,
        });
      }).toThrowError(Error('refreshToken is not defined!'));
    });
  });
});

describe('valid sendMessageOptions as a sendMessageOptionsI', () => {
  const sendMessageOptions: sendMessageOptionsI = {
    message: 'Message string',
    userIdentifier: 'userIDstring1234123',
    accessToken: '123accessTokenStrin.g1-_239.09',
  };

  it("shouldn't throw an error for valid data", () => {
    expect(validSendMessageOptions(sendMessageOptions));
  });

  it('should throw an Error for non defined sendMessageOptions', () => {
    expect(() => {
      // @ts-ignore
      validSendMessageOptions(undefined);
    }).toThrowError(Error('sendMessageOptions are not defined!'));
  });

  it('should throw an Error for non strings defined message', () => {
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
        validSendMessageOptions({ ...sendMessageOptions, message: item });
      }).toThrowError(Error(`message is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean message', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validSendMessageOptions({ ...sendMessageOptions, message: item });
      }).toThrowError(Error('message is not defined!'));
    });
  });

  it('should throw an Error for non strings defined userIdentifier', () => {
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
        validSendMessageOptions({ ...sendMessageOptions, userIdentifier: item });
      }).toThrowError(
        Error(`userIdentifier is type of ${typeof item} instead of string`)
      );
    });
  });

  it('should throw an Error for not defined types & false boolean userIdentifier', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validSendMessageOptions({ ...sendMessageOptions, userIdentifier: item });
      }).toThrowError(Error('userIdentifier is not defined!'));
    });
  });

  it('should throw an Error for non strings defined accessToken', () => {
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
        validSendMessageOptions({ ...sendMessageOptions, accessToken: item });
      }).toThrowError(Error(`accessToken is type of ${typeof item} instead of string`));
    });
  });

  it('should throw an Error for not defined types & false boolean accessToken', () => {
    const notDefinedTestData: Array<any> = [null, undefined, false];

    notDefinedTestData.forEach(item => {
      expect(() => {
        // @ts-ignore
        validSendMessageOptions({ ...sendMessageOptions, accessToken: item });
      }).toThrowError(Error('accessToken is not defined!'));
    });
  });
});
