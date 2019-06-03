export const parseScopesArrayToString = (arrayToParse: Array<string>) => {
  if (!arrayToParse) {
    throw Error('scopes array is not defined!');
  } else if (!Array.isArray(arrayToParse)) {
    throw Error(`scopes is type of ${typeof arrayToParse} instead of Array`);
  } else {
    let parsed = '[';
    arrayToParse.forEach((el, index) => {
      if (typeof el !== 'string')
        throw Error(`scope ${el}, at index ${index} is not string!`);
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
  parseScopesArrayToString,
};
