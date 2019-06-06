import {
  env,
  loginOptionsI,
  authenticationTokenResponseI,
  refreshAuthenticationTokenOptionsI,
  sendMessageOptionsI,
} from './interfaces';
import {
  validEnvironment,
  validLoginOptions,
  validRefreshAuthenticationTokenOptions,
  validSendMessageOptions,
} from './utils/check.utils';
import { loginWindow } from './utils/window.utils';
import { refreshAuthenticationTokenRequest } from './api/token.api';
import { sendMessageRequest } from './api/message.api';
import { authorizationURLs } from './constants';
/**
 * This request user permission to use his/her account for any listed scope
 * @returns {authenticationTokenResponseI} authenticationTokenResponse
 * @param {loginOptionsI} loginOptions
 * @param {env} environment
 */
export const login = (
  loginOptions: loginOptionsI,
  environment?: env
): Promise<authenticationTokenResponseI> => {
  try {
    validEnvironment(environment);
    validLoginOptions(loginOptions);
    return loginWindow(new URL(authorizationURLs[environment || 'prod']), loginOptions);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * This refresh access token received earlier
 * @returns {authenticationTokenResponseI} authenticationTokenResponse
 * @param {refreshAuthenticationTokenOptionsI} refreshAuthenticationTokenOptions
 * @param {env} environment
 */
export const refreshAuthenticationToken = (
  refreshAuthenticationTokenOptions: refreshAuthenticationTokenOptionsI,
  environment?: env
): Promise<authenticationTokenResponseI> => {
  try {
    validEnvironment(environment);
    validRefreshAuthenticationTokenOptions(refreshAuthenticationTokenOptions);
    return refreshAuthenticationTokenRequest({
      refreshAuthenticationTokenOptions,
      environment: environment || 'prod',
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * This request send message to another KingsChat user
 * @returns {string} info
 * @param {sendMessageOptionsI} sendMessageOptions
 * @param {env} environment - optional environment change
 */
export const sendMessage = (
  sendMessageOptions: sendMessageOptionsI,
  environment?: env
): Promise<string> => {
  try {
    validEnvironment(environment);
    validSendMessageOptions(sendMessageOptions);
    return sendMessageRequest({
      sendMessageOptions,
      environment: environment || 'prod',
    });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default {
  login,
  refreshAuthenticationToken,
  sendMessage,
};
