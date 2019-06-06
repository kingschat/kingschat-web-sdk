import {
  env,
  loginOptionsI,
  sendMessageOptionsI,
  refreshAuthenticationTokenOptionsI,
} from '../interfaces';

export const validEnvironment = (environment?: env) => {
  if (environment) {
    const allowedEnvironments = ['dev', 'staging', 'prod'];
    if (typeof environment !== 'string' || !allowedEnvironments.includes(environment)) {
      throw Error('environment is invalid');
    }
  }
};

export const validLoginOptions = (loginOptions: loginOptionsI) => {
  if (!loginOptions) {
    throw Error('loginOptions are not defined!');
  }

  if (!loginOptions.scopes) {
    throw Error('scopes are not defined!');
  } else if (!Array.isArray(loginOptions.scopes)) {
    throw Error(`scopes are type of ${typeof loginOptions.scopes} instead of Array`);
  }

  if (!loginOptions.clientId) {
    throw Error('clientId is not defined!');
  } else if (typeof loginOptions.clientId !== 'string') {
    throw Error(`clientId is type of ${typeof loginOptions.clientId} instead of string`);
  }
};

export const validRefreshAuthenticationTokenOptionsI = (
  refreshAuthenticationTokenOptions: refreshAuthenticationTokenOptionsI
) => {
  if (!refreshAuthenticationTokenOptions) {
    throw Error('refreshAuthenticationTokenOptions are not defined!');
  }

  if (!refreshAuthenticationTokenOptions.clientId) {
    throw Error('clientId is not defined!');
  } else if (typeof refreshAuthenticationTokenOptions.clientId !== 'string') {
    throw Error(
      `clientId is type of ${typeof refreshAuthenticationTokenOptions.clientId} instead of string`
    );
  }

  if (!refreshAuthenticationTokenOptions.refreshToken) {
    throw Error('refreshToken is not defined!');
  } else if (typeof refreshAuthenticationTokenOptions.refreshToken !== 'string') {
    throw Error(
      `refreshToken is type of ${typeof refreshAuthenticationTokenOptions.refreshToken} instead of string`
    );
  }
};

export const validSendMessageOptionsI = (sendMessageOptions: sendMessageOptionsI) => {
  if (!sendMessageOptions) {
    throw Error('sendMessageOptions are not defined!');
  }

  if (!sendMessageOptions.message) {
    throw Error('message is not defined!');
  } else if (typeof sendMessageOptions.message !== 'string') {
    throw Error(
      `message is type of ${typeof sendMessageOptions.message} instead of string`
    );
  }

  if (!sendMessageOptions.accessToken) {
    throw Error('accessToken is not defined!');
  } else if (typeof sendMessageOptions.accessToken !== 'string') {
    throw Error(
      `accessToken is type of ${typeof sendMessageOptions.accessToken} instead of string`
    );
  }

  if (!sendMessageOptions.userIdentifier) {
    throw Error('userIdentifier is not defined!');
  } else if (typeof sendMessageOptions.userIdentifier !== 'string') {
    throw Error(
      `userIdentifier is type of ${typeof sendMessageOptions.userIdentifier} instead of string`
    );
  }
};

export default {
  validEnvironment,
  validLoginOptions,
  validRefreshAuthenticationTokenOptionsI,
  validSendMessageOptionsI,
};
