import {
  loginOptionsI,
  sendMessageOptionsI,
  refreshAuthenticationTokenOptionsI,
} from '../interfaces';

export const validCallbackFunction = (callbackFunction: Function): boolean => {
  if (!callbackFunction) {
    throw Error('callbackFunction is not defined!');
  } else if (typeof callbackFunction !== 'function') {
    throw Error(
      `callbackFunction is type of ${typeof callbackFunction} instead of function`
    );
  }

  return true;
};

export const validLoginOptions = (loginOptions: loginOptionsI): boolean => {
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

  return true;
};

export const validRefreshAuthTokenRequestI = (
  refreshAuthTokenRequest: refreshAuthenticationTokenOptionsI
): boolean => {
  if (!refreshAuthTokenRequest.clientId) {
    throw Error('clientId is not defined!');
  } else if (typeof refreshAuthTokenRequest.clientId !== 'string') {
    throw Error(
      `clientId is type of ${typeof refreshAuthTokenRequest.clientId} instead of string`
    );
  }

  if (!refreshAuthTokenRequest.refreshToken) {
    throw Error('refreshToken is not defined!');
  } else if (typeof refreshAuthTokenRequest.refreshToken !== 'string') {
    throw Error(
      `refreshToken is type of ${typeof refreshAuthTokenRequest.refreshToken} instead of string`
    );
  }

  return true;
};

export const validMessageRequestI = (messageData: sendMessageOptionsI): boolean => {
  if (!messageData.message) {
    throw Error('message is not defined!');
  } else if (typeof messageData.message !== 'string') {
    throw Error(`message is type of ${typeof messageData.message} instead of string`);
  }

  if (!messageData.accessToken) {
    throw Error('accessToken is not defined!');
  } else if (typeof messageData.accessToken !== 'string') {
    throw Error(
      `accessToken is type of ${typeof messageData.accessToken} instead of string`
    );
  }

  if (!messageData.userIdentifier) {
    throw Error('userIdentifier is not defined!');
  } else if (typeof messageData.userIdentifier !== 'string') {
    throw Error(
      `userIdentifier is type of ${typeof messageData.userIdentifier} instead of string`
    );
  }

  return true;
};

export default {
  validCallbackFunction,
  validLoginOptions,
  validRefreshAuthTokenRequestI,
  validMessageRequestI,
};
