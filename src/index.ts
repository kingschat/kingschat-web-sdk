import {
  env,
  loginOptionsI,
  authenticationTokenResponseI,
  refreshAuthenticationTokenOptionsI,
  sendMessageOptionsI,
} from './interfaces';
import {
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
 * @returns {authenticationTokenResponseI} authenticationTokenResponse
 * @param {loginOptionsI} loginOptions
 * @param {env} environment
 */
export const login = (
  loginOptions: loginOptionsI,
  environment?: env
): Promise<authenticationTokenResponseI> => {
  try {
    validLoginOptions(loginOptions);
    return loginWindow(new URL(authorizationURLs[environment || 'prod']), loginOptions);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * This function call `callbackFunction` with `authenticationTokenResponseI` interface as param
 * @returns {authenticationTokenResponseI} authenticationTokenResponse
 * @param {refreshAuthenticationTokenOptionsI} refreshAuthTokenOptions
 * @param {env} environment
 */
export const refreshAuthToken = (
  refreshAuthTokenOptions: refreshAuthenticationTokenOptionsI,
  environment?: env
): Promise<authenticationTokenResponseI> => {
  try {
    validRefreshAuthTokenRequestI(refreshAuthTokenOptions);
    return refreshAuthTokenRequest({
      refreshAuthTokenOptions,
      environment,
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * This function call `callbackFunction` on success
 * @returns {string} info
 * @param {sendMessageOptionsI} sendMessageOptions
 * @param {env} environment - optional environment change
 */
export const sendMessage = (
  sendMessageOptions: sendMessageOptionsI,
  environment?: env
): Promise<string> => {
  try {
    validMessageRequestI(sendMessageOptions);
    return messageRequest({ sendMessageOptions, environment });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  login,
  refreshAuthToken,
  sendMessage,
};
