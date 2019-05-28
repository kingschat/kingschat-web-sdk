# KingsChat Web SDK

<https://github.com/diegohaz/nod>

## Stack

-   [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
-   [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
-   [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
-   [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
-   [**TypeScript**](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.
-   [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request.

## API

#### Table of Contents

-   [login](#login)
    -   [Parameters](#parameters)
-   [refreshAuthToken](#refreshauthtoken)
    -   [Parameters](#parameters-1)
-   [sendMessage](#sendmessage)
    -   [Parameters](#parameters-2)

### login

This function call `callbackFunction` with `authTokenResponseI` interface as param

#### Parameters

-   `callbackFunction` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
-   `options` **loginOptionsI** 

Returns **any** nothing

### refreshAuthToken

This function call `callbackFunction` with `authTokenResponseI` interface as param

#### Parameters

-   `callbackFunction` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
-   `requestData` **refreshAuthTokenRequestI** 

Returns **any** nothing

### sendMessage

This function call `callbackFunction` with `authTokenResponseI` interface as param

#### Parameters

-   `callbackFunction` **[function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** 
-   `messageData` **sendMessageRequestI** 

Returns **any** nothing

## License

ISC © [KingsChat](https://github.com/kingschat)
