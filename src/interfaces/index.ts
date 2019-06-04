export type env = 'dev' | 'staging' | 'prod';

export interface loginOptionsI {
  scopes: Array<string>;
  clientId: string;
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
  refreshToken: string;
}

/* Params for a `kingschat-sdk-web.sendMessage` function. */
export interface messageRequestI {
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
