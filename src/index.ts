import {
  loginOptionsI,
  authTokenResponseI,
  refreshAuthTokenRequestI,
  sendMessageRequestI,
} from './interfaces';
import {
  validCallbackFunction,
  validLoginOptions,
  validRefreshAuthTokenRequestI,
} from './utils/check.utils';
import { loginWindow } from './utils/window.utils';
import { refreshAuthTokenRequest } from './api/token.api';
import { authorizationURLs } from './constants';
/**
 * This function call `callbackFunction` with `authTokenResponseI` interface as param
 * @returns nothing
 * @param {function} callbackFunction
 * @param {loginOptionsI} loginOptions
 */
export const login = (callbackFunction: Function, loginOptions: loginOptionsI) => {
  if (validCallbackFunction(callbackFunction) && validLoginOptions(loginOptions)) {
    loginWindow(new URL(authorizationURLs[loginOptions.env || 'prod']), loginOptions)
      .then((data: authTokenResponseI) => {
        callbackFunction(data as authTokenResponseI);
      })
      .catch((error: any) => {
        callbackFunction(error);
      });
  }
};

/**
 * This function call `callbackFunction` with `authTokenResponseI` interface as param
 * @returns nothing
 * @param {function} callbackFunction
 * @param {refreshAuthTokenRequestI} refreshAuthTokenRequestData
 */
export const refreshAuthToken = (
  callbackFunction: Function,
  refreshAuthTokenRequestData: refreshAuthTokenRequestI
) => {
  if (
    validCallbackFunction(callbackFunction) &&
    validRefreshAuthTokenRequestI(refreshAuthTokenRequestData)
  ) {
    refreshAuthTokenRequest({ options: refreshAuthTokenRequestData }).then(
      (payload: authTokenResponseI) => {
        callbackFunction(payload as authTokenResponseI);
      }
    );
  }
};

/**
 * This function call `callbackFunction` with `authTokenResponseI` interface as param
 * @returns nothing
 * @param {function} callbackFunction
 * @param {sendMessageRequestI} messageData
 */
export const sendMessage = (
  callbackFunction: Function,
  messageData: sendMessageRequestI
) => {
  /* TODO now it's mockup */
  callbackFunction(messageData.message);
};

export default {
  login,
  refreshAuthToken,
  sendMessage,
};
