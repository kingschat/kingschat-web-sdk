import { authTokenResponseI, refreshAuthTokenRequestI } from '../interfaces';

export const refreshAuthTokenRequest = ({
  options,
}: {
  options: refreshAuthTokenRequestI;
}): Promise<authTokenResponseI> => {
  return fetch('https://kc-connect.appunite.com/oauth2/token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: options.clientId,
      grant_type: 'refresh_token',
      refresh_token: options.refreshToken,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json().then(payload => {
          return {
            accessToken: payload.access_token,
            expiresInMillis: payload.expires_in_millis,
            refreshToken: payload.refresh_token,
          };
        });
      }
      return Promise.reject(Error('error'));
    })
    .catch(error => {
      return Promise.reject(Error(error.message));
    });
};

export default {
  refreshAuthTokenRequest,
};
