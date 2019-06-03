import { loginOptionsI, refreshAuthTokenRequestI } from '../interfaces';

export const validCallbackFunction = (callbackFunction: Function): boolean => {
  if (!callbackFunction) {
    throw Error('callbackFunction is not defined!');
  } else if (typeof callbackFunction !== 'function') {
    throw Error(
      `callbackFunction is type of ${typeof callbackFunction} instead of function`
    );
  } else {
    return true;
  }
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
  const allowedEnv = ['dev', 'staging', 'prod'];
  if (loginOptions.env && !allowedEnv.includes(loginOptions.env)) {
    throw Error(`env can only be one of: "dev", "staging", "prod"`);
  }

  return true;
};

export const validRefreshAuthTokenRequestI = (
  requestAuthTokenRequest: refreshAuthTokenRequestI
): boolean => {
  if (!requestAuthTokenRequest.clientId) {
    throw Error('clientId is not defined!');
  } else if (typeof requestAuthTokenRequest.clientId !== 'string') {
    throw Error(
      `clientId is type of ${typeof requestAuthTokenRequest.clientId} instead of string`
    );
  }

  if (!requestAuthTokenRequest.refreshToken) {
    throw Error('refreshToken is not defined!');
  } else if (typeof requestAuthTokenRequest.refreshToken !== 'string') {
    throw Error(
      `refreshToken is type of ${typeof requestAuthTokenRequest.refreshToken} instead of string`
    );
  }
  return true;
};

export default {
  validCallbackFunction,
  validLoginOptions,
  validRefreshAuthTokenRequestI,
};
