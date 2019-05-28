import { validCallbackFunction } from './check.utils';

it('should return true for function', () => {
  const fun = () => {};
  expect(validCallbackFunction(fun)).toBe(true);
});

it('should return false for defined notFunctions & true boolean', () => {
  const definedTestData: Array<any> = [
    'string',
    { object: true },
    ['array'],
    true,
    12,
    12.34,
    0x123,
    Symbol('abc'),
    new Error('123abc'),
  ];

  definedTestData.forEach(item => {
    expect(() => {
      validCallbackFunction(item);
    }).toThrowError(
      new Error(`callbackFunction is type of ${typeof item} instead of function`)
    );
  });
});

it('should return false for not defined types & false boolean', () => {
  const notDefinedTestData: Array<any> = [null, undefined, false];

  notDefinedTestData.forEach(item => {
    expect(() => {
      validCallbackFunction(item);
    }).toThrowError(new Error('callbackFunction is not defined!'));
  });
});
