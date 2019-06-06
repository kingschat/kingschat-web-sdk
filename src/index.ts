import {
  env,
  loginOptionsI,
  authenticationTokenResponseI,
  refreshAuthenticationTokenOptionsI,
  sendMessageOptionsI,
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
 * This function call `callbackFunction` with `authenticationTokenResponseI` interface as param
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
    loginWindow(new URL(authorizationURLs[environment || 'prod']), loginOptions).then(
      (data: authenticationTokenResponseI) => {
        callbackFunction(data as authenticationTokenResponseI);
      }
    );
  }
};

/**
 * This function call `callbackFunction` with `authenticationTokenResponseI` interface as param
 * @returns nothing
 * @param {function} callbackFunction
 * @param {refreshAuthenticationTokenOptionsI} refreshAuthTokenOptions
 * @param {env} environment - optional environment change
 */
export const refreshAuthToken = (
  callbackFunction: Function,
  refreshAuthTokenOptions: refreshAuthenticationTokenOptionsI,
  environment?: env
) => {
  if (
    validCallbackFunction(callbackFunction) &&
    validRefreshAuthTokenRequestI(refreshAuthTokenOptions)
  ) {
    refreshAuthTokenRequest({
      refreshAuthTokenOptions,
      environment,
    }).then((payload: authenticationTokenResponseI) => {
      callbackFunction(payload as authenticationTokenResponseI);
    });
  }
};

/**
 * This function call `callbackFunction` on success
 * @returns nothing
 * @param {function} callbackFunction
 * @param {sendMessageOptionsI} sendMessageOptions
 * @param {env} environment - optional environment change
 */
export const sendMessage = (
  callbackFunction: Function,
  sendMessageOptions: sendMessageOptionsI,
  environment?: env
) => {
  if (
    validCallbackFunction(callbackFunction) &&
    validMessageRequestI(sendMessageOptions)
  ) {
    messageRequest({ sendMessageOptions, environment }).then((payload: any) => {
      callbackFunction(payload);
    });
  }
};

export default {
  login,
  refreshAuthToken,
  sendMessage,
};
