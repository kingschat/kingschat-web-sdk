export const validCallbackFunction = (callbackFunction: Function) => {
  if (!callbackFunction) {
    throw Error('callbackFunction is not defined!');
  } else if (typeof callbackFunction !== 'function') {
    throw Error(
      `callbackFunction is type of ${typeof callbackFunction} instead of function`
    );
  } else {
    return true;
  }
};

export default {
  validCallbackFunction,
};
