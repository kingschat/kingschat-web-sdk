/*eslint-disable*/
// @ts-ignore
import rewire from 'rewire';
import { loginOptionsI } from '../interfaces';
const windowModule = rewire('../../dist/utils/window.utils.js');
const newWindowOptions: Function = windowModule.__get__('newWindowOptions');
const newWindowUrl: Function = windowModule.__get__('newWindowUrl');

describe('new window options', () => {
  it("shouldn't runs when no window", () => {
    expect(() => {
      newWindowOptions();
    }).toThrowError(new Error(`No window defined`));
  });
  /* Behavior with Window available is not tested*/
});
describe('new window url', () => {
  const mockedUrl: URL = new URL('https://github.com/kingschat/kingschat-web-sdk');
  const mockedOptions: loginOptionsI = {
    scopes: ['send_chat_message'],
    clientId: '123abc00-abcd-1234-1234-123456789abc',
  };

  describe("shouldn't run without required params", () => {
    it('no param at all', () => {
      expect(() => {
        newWindowUrl();
      }).toThrowError(
        new Error("Cannot destructure property `myUrl` of 'undefined' or 'null'.")
      );
    });

    it('url is missing', () => {
      expect(() => {
        newWindowUrl({ myUrl: undefined, options: mockedOptions });
      }).toThrowError(new Error('No url provided'));
    });

    it('options are missing', () => {
      expect(() => {
        newWindowUrl({ myUrl: mockedUrl, options: undefined });
      }).toThrowError(new Error('No options provided'));
    });

    it('scopes are missing', () => {
      expect(() => {
        newWindowUrl({
          myUrl: mockedUrl,
          options: {
            clientId: '123abc00-abcd-1234-1234-123456789abc',
          },
        });
      }).toThrowError(new Error('No "scopes" option provided'));
    });
    it('clientId is missing', () => {
      expect(() => {
        newWindowUrl({
          myUrl: mockedUrl,
          options: {
            scopes: ['send_chat_message'],
          },
        });
      }).toThrowError(new Error('No "clientId" option provided'));
    });
  });
  /* Behavior with URL available is not tested*/
});
