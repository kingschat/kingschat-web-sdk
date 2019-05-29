/* Options for a `kingschat-sdk-web.login` function */
export interface loginOptionsI {
  scopes: Array<string>;
  clientId: string;
  env?: 'dev' | 'staging' | 'prod';
}

/* Params for callbackFunctions on `kingschat-sdk-web.login` & `kingschat-sdk-web.refreshAuthToken` functions. */
export interface authTokenResponseI {
  accessToken: string;
  expiresInMillis: number;
  refreshToken: string;
}

/* Params for a `kingschat-sdk-web.refreshAuthToken` function. */
export interface refreshAuthTokenRequestI {
  clientId: string;
  grantType: number;
  refreshToken: string;
}

/* Params for a `kingschat-sdk-web.sendMessage` function. */
export interface sendMessageRequestI {
  message: string;
  userIdentifier: string;
  accessToken: string;
}

/* Window area interface for window.open function options. */
export interface windowAreaI {
  width: number;
  height: number;
  left?: number;
  top?: number;
}
