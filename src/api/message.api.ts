import { env, authTokenResponseI, messageRequestI } from '../interfaces';
import { kingsChatApiPaths } from '../constants';

export const messageRequest = ({
  messageData,
  environment = 'prod',
}: {
  messageData: messageRequestI;
  environment?: env;
}): Promise<authTokenResponseI> => {
  return fetch(
    `${kingsChatApiPaths[environment]}/api/users/${
      messageData.userIdentifier
    }/new_message`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${messageData.accessToken}`,
      },
      body: JSON.stringify({
        message: {
          body: {
            text: {
              body: messageData.message,
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
