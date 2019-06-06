/*eslint-disable*/
// @ts-ignore
import rewire from 'rewire';
const windowModule = rewire('../../dist/utils/window.utils.js');
const newWindowOptions: Function = windowModule.__get__('newWindowOptions');

describe('new window refreshAuthTokenOptions', () => {
  it("shouldn't runs when no window", () => {
    expect(() => {
      newWindowOptions();
    }).toThrowError(Error(`No window defined`));
  });
  /* Behavior with Window available is not tested*/
});
