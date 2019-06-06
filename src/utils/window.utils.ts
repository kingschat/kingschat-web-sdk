/* global window */
import { authenticationTokenResponseI, loginOptionsI, windowAreaI } from '../interfaces';
import { allowedResponseOrigins } from '../constants';
import { parseScopesArrayToString } from './parse.utils';

function newWindowOptions(): string {
  if (!window) throw Error('No window defined');
  const windowArea: windowAreaI = {
    width: Math.min(Math.floor(window.outerWidth * 0.9), 950),
    height: Math.min(Math.floor(window.outerHeight * 0.9), 600),
  };
  windowArea.left = Math.floor(
    window.screenX + (window.outerWidth - windowArea.width) / 2
  );
  windowArea.top = Math.floor(
    window.screenY + (window.outerHeight - windowArea.height) / 8
  );

  return `toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0,
    width=${windowArea.width},height=${windowArea.height},
    left=${windowArea.left},top=${windowArea.top}`;
}

function newWindowUrl({ myUrl, options }: { myUrl: URL; options: loginOptionsI }): URL {
  const url = new URL(myUrl.href);
  url.searchParams.append('client_id', options.clientId || '');
  url.searchParams.append('scopes', parseScopesArrayToString(options.scopes));
  url.searchParams.append('redirect_uri', window.location.origin);
  url.searchParams.append('post_message', '1');
  return url;
}

export const loginWindow = (
  myUrl: URL,
  options: loginOptionsI
): Promise<authenticationTokenResponseI> => {
  const windowOptions: string = newWindowOptions();
  const windowURL: URL = newWindowUrl({ myUrl, options });

  const authWindow: Window | null = window.open(windowURL.href, '_blank', windowOptions);

  if (!authWindow) {
    throw Error('You have to enable popups to show login window');
  }

  // Listen to message from child window
  return new Promise((resolve, reject) => {
    const listener = (msg: MessageEvent) => {
      /* Ignore self messages like setImmediate - Messages from other windows won't have source for security reasons */
      if (msg.source === window) {
        return;
      }

      if (!allowedResponseOrigins.includes(msg.origin)) {
        authWindow.close();
        reject(new Error('Not allowed message origin'));
      }
      if (msg.data) {
        authWindow.close();
        if (msg.data.error) {
          reject(new Error(msg.data.error));
        } else {
          resolve(msg.data);
        }
      } else {
        reject(new Error('Bad Request'));
      }
    };
    window.addEventListener('message', listener as EventListener, false);
    const interval = setInterval(() => {
      if (!authWindow.window) {
        window.removeEventListener('message', listener as EventListener, false);
        clearInterval(interval);
        throw Error('User closed window before allowing access');
      }
    }, 350);
  });
};

export default {
  loginWindow,
};
