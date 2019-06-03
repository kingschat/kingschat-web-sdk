/*eslint-disable*/
// @ts-ignore
import rewire from 'rewire';
const windowModule = rewire('../../dist/utils/window.utils.js');
const newWindowOptions: Function = windowModule.__get__('newWindowOptions');

describe('new window options', () => {
  it("shouldn't runs when no window", () => {
    expect(() => {
      newWindowOptions();
    }).toThrowError(new Error(`No window defined`));
  });
  /* Behavior with Window available is not tested*/
});
