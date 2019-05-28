import {
  loginOptionsI,
  authTokenResponseI,
  refreshAuthTokenRequestI,
  sendMessageRequestI,
} from './interfaces';
import { validCallbackFunction } from './utils/check.utils';
import { loginWindow } from './utils/window.utils';
import { authorizationURLs } from './constants';
/**
 * This function call `callbackFunction` with `authTokenResponseI` interface as param
 * @returns nothing
 * @param {function} callbackFunction
 * @param {loginOptionsI} options
 */
export const login = (callbackFunction: Function, options: loginOptionsI) => {
  if (validCallbackFunction(callbackFunction)) {
    loginWindow(new URL(authorizationURLs[options.env || 'prod']), options)
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
 * @param {refreshAuthTokenRequestI} requestData
 */
export const refreshAuthToken = (
  callbackFunction: Function,
  requestData: refreshAuthTokenRequestI
) => {
  /* TODO now it's mockup */
  callbackFunction(requestData.clientId);
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
