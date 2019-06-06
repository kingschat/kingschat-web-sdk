export type env = 'dev' | 'staging' | 'prod';

/* Params for a `kingschat-sdk-web.login` function. */
export interface loginOptionsI {
  scopes: Array<string>;
  clientId: string;
}

/* Resolved payload interface for `kingschat-sdk-web.login` & `kingschat-sdk-web.refreshAuthenticationToken` functions. */
export interface authenticationTokenResponseI {
  accessToken: string;
  expiresInMillis: number;
  refreshToken: string;
}

/* Params for a `kingschat-sdk-web.refreshAuthenticationToken` function. */
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

/* Window area interface for newWindowOptions function. */
export interface windowAreaI {
  width: number;
  height: number;
  left?: number;
  top?: number;
}
