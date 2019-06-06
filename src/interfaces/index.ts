export type env = 'dev' | 'staging' | 'prod';

export interface loginOptionsI {
  scopes: Array<string>;
  clientId: string;
}

/* Params for callbackFunctions on `kingschat-sdk-web.login` & `kingschat-sdk-web.refreshAuthToken` functions. */
export interface authenticationTokenResponseI {
  accessToken: string;
  expiresInMillis: number;
  refreshToken: string;
}

/* Params for a `kingschat-sdk-web.refreshAuthToken` function. */
export interface refreshAuthenticationTokenOptionsI {
  clientId: string;
  refreshToken: string;
}

/* Params for a `kingschat-sdk-web.sendMessage` function. */
export interface sendMessageOptionsI {
  message: string;
  userIdentifier: string;
  accessToken: string;
}

/* Window area interface for window.open function refreshAuthTokenOptions. */
export interface windowAreaI {
  width: number;
  height: number;
  left?: number;
  top?: number;
}
