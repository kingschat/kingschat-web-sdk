export const parseArrayToString = (arrayToParse: Array<string>) => {
  if (!arrayToParse) {
    throw Error('arrayToParse is not defined!');
  } else if (!Array.isArray(arrayToParse)) {
    throw Error(`callbackFunction is type of ${typeof arrayToParse} instead of Array`);
  } else {
    let parsed = '[';
    arrayToParse.forEach((el, index) => {
      if (typeof el !== 'string') throw Error(`Array's element is not string!`);
      if (index !== 0) {
        parsed += ', ';
      }
      parsed += `"${el}"`;
    });
    parsed += ']';

    return parsed;
  }
};

export default {
  parseArrayToString,
};
