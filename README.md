# KingsChat Web SDK

<https://github.com/kingschat/kingschat-web-sdk>

## Stack

-   [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
-   [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
-   [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
-   [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
-   [**TypeScript**](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.
-   [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request.

## Table of Contents
- [Installation](#instalation)
- [Api](#api)
  -   [login](#login)
      - [login options interface](#loginoptions-interface)
      - [authentication token response interface](#authtokenresponse-interface)
  -   [refreshAuthToken](#refreshauthtoken)
  -   [sendMessage](#sendmessage)
-   [Styles](#styles)

## Instalation

### NPM
Install our node module using npm

```bash
npm install --save-dev kingschat-web-sdk
```

### Yarn

```bash
yarn add kingschat-web-sdk --dev
```

## API

```javascript
import kingsChatWebSdk from "kingschat-web-sdk";
```


### login

Use this function to get KingsChat's authenticate code, that you will need for any KingsChat request.
You have to pass your **callback function** and **login options**.

You will get your clientId on [KingsChat's Developer Site](https://developer.kingsch.at/)

```javascript
const callBackFunction(authTokenResponse) {
  // Token will include all fields from authTokenResponse Interface listed below
  //
  // accessToken: string;
  // expiresInMillis: number;
  // refreshToken: string;
  //
  // You should store KingsChat token somewere
}
const loginOptions = {
  // login options must include all of loginOptions Interface fields
  // Scopes is an Array of scopes you want access
  scopes: ["send_chat_message"],
  // Your clientId generated on KingsChat's Developer Site
  clientId: 'a1234567-abcd-1234-abcd-12345abc1234'
}

kingsChatWebSdk.login(callBackFunction, loginOptions);
```

##### loginOptions Interface: 
```typescript
interface loginOptionsI {
  scopes: string;
  clientId: string;
}
```

##### authTokenResponse Interface: 
```typescript
interface authTokenResponseI {
  accessToken: string;
  expiresInMillis: number;
  refreshToken: string;
}
```

### refreshAuthToken

This function call `callbackFunction` with `authTokenResponseI` interface as param

### sendMessage

This function call `callbackFunction` with `authTokenResponseI` interface as param


## Styles

Import **styles.min.css** in your project. Styles are located in `kingschat-web-sdk/dist/stylesheets/style.min.css`

Add some `a` element with one of the classes:
-   `kc-web-sdk-btn` - for normal button
-   `kc-web-sdk-btn-m` - for medium size button
-   `kc-web-sdk-btn-s` - for small size button


#### Webpack

inside main.js / main.ts

```javascript
import "kingschat-web-sdk/dist/stylesheets/style.min.css"
```
inside any HTML template
```html
<a class="kc-web-sdk-btn"></a>
```

### Vue.js

```vue.js
<template>
  <a class="kc-web-sdk-btn" @click="loginWithKingschat"></a>
</template>

<style src="kingschat-web-sdk/dist/stylesheets/style.min.css"></style>
```

#### or

```vue.js
<template>
  <a class="kc-web-sdk-btn" @click="loginWithKingschat"></a>
</template>
<script>
import "kingschat-web-sdk/dist/stylesheets/style.min.css"
</script>
```

### React

```jsx harmony
import "kingschat-web-sdk/dist/stylesheets/style.min.css"
class Button extends Component {
  render() {
    <a className="kc-web-sdk-btn" onClick={() => this.loginWithKingschat()} />
  }
}
```

### for SASS / SCSS

```scss
@import "~kingschat-web-sdk/dist/stylesheets/style.min.css";
```

## License

ISC © [KingsChat](https://github.com/kingschat)
