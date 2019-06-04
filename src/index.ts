import {
  env,
  loginOptionsI,
  authTokenResponseI,
  refreshAuthTokenRequestI,
  messageRequestI,
} from './interfaces';
import {
  validCallbackFunction,
  validLoginOptions,
  validRefreshAuthTokenRequestI,
  validMessageRequestI,
} from './utils/check.utils';
import { loginWindow } from './utils/window.utils';
import { refreshAuthTokenRequest } from './api/token.api';
import { messageRequest } from './api/message.api';
import { authorizationURLs } from './constants';
/**
 * This function call `callbackFunction` with `authTokenResponseI` interface as param
 * @returns nothing
 * @param {function} callbackFunction
 * @param {loginOptionsI} loginOptions
 * @param {env} environment - optional environment change
 */
export const login = (
  callbackFunction: Function,
  loginOptions: loginOptionsI,
  environment?: env
) => {
  if (validCallbackFunction(callbackFunction) && validLoginOptions(loginOptions)) {
    loginWindow(new URL(authorizationURLs[environment || 'prod']), loginOptions)
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
 * @param {env} environment - optional environment change
 */
export const refreshAuthToken = (
  callbackFunction: Function,
  refreshAuthTokenRequestData: refreshAuthTokenRequestI,
  environment?: env
) => {
  if (
    validCallbackFunction(callbackFunction) &&
    validRefreshAuthTokenRequestI(refreshAuthTokenRequestData)
  ) {
    refreshAuthTokenRequest({ options: refreshAuthTokenRequestData, environment }).then(
      (payload: authTokenResponseI) => {
        callbackFunction(payload as authTokenResponseI);
      }
    );
  }
};

/**
 * This function call `callbackFunction` on success
 * @returns nothing
 * @param {function} callbackFunction
 * @param {messageRequestI} messageData
 * @param {env} environment - optional environment change
 */
export const sendMessage = (
  callbackFunction: Function,
  messageData: messageRequestI,
  environment?: env
) => {
  if (validCallbackFunction(callbackFunction) && validMessageRequestI(messageData)) {
    messageRequest({ messageData, environment }).then((payload: authTokenResponseI) => {
      callbackFunction(payload as authTokenResponseI);
    });
  }
};

export default {
  login,
  refreshAuthToken,
  sendMessage,
};
