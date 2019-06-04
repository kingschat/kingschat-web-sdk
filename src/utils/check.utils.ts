import { loginOptionsI, messageRequestI, refreshAuthTokenRequestI } from '../interfaces';

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
  refreshAuthTokenRequest: refreshAuthTokenRequestI
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

export default {
  validCallbackFunction,
  validLoginOptions,
  validRefreshAuthTokenRequestI,
};
