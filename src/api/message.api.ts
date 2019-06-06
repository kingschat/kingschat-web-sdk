import { env, authenticationTokenResponseI, sendMessageOptionsI } from '../interfaces';
import { kingsChatApiPaths } from '../constants';

export const messageRequest = ({
  sendMessageOptions,
  environment = 'prod',
}: {
  sendMessageOptions: sendMessageOptionsI;
  environment?: env;
}): Promise<authenticationTokenResponseI> => {
  return fetch(
    `${kingsChatApiPaths[environment]}/api/users/${
      sendMessageOptions.userIdentifier
    }/new_message`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sendMessageOptions.accessToken}`,
      },
      body: JSON.stringify({
        message: {
          body: {
            text: {
              body: sendMessageOptions.message,
            },
          },
        },
      }),
    }
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(Error('error'));
    })
    .catch(error => {
      return Promise.reject(Error(error.message));
    });
};

export default {
  messageRequest,
};
