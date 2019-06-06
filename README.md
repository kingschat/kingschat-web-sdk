# KingsChat Web SDK

<https://github.com/kingschat/kingschat-web-sdk>

## Stack

- [**Babel**](https://babeljs.io/) - Write next generation JavaScript today.
- [**Jest**](https://facebook.github.io/jest) - JavaScript testing framework used by Facebook.
- [**ESLint**](http://eslint.org/) - Make sure you are writing a quality code.
- [**Prettier**](https://prettier.io/) - Enforces a consistent style by parsing your code and re-printing it.
- [**TypeScript**](https://www.typescriptlang.org/) - Typed superset of JavaScript that compiles to plain JavaScript.
- [**Travis CI**](https://travis-ci.org) - Automate tests and linting for every push or pull request.

## Table of Contents

- [Installation](#instalation)
- [Api](#api)
  - [login](#login)
    - [loginOptions interface](#loginoptions-interface)
    - [authenticationTokenResponse interface](#authenticationtokenresponse-interface)
  - [refreshAuthenticationToken](#refreshauthenticationtoken)
    - [refreshAuthenticationTokenOptions interface](#refreshauthenticationtokenoptions-interface)
    - [authenticationTokenResponse interface](#authenticationtokenresponse-interface)
  - [sendMessage](#sendmessage)
    - [sendMessageOptions interface](#sendmessageoptions-interface)
- [Styles](#styles)
- [Usage](#usage)
  - [Webpack](#webpack)
  - [Vue.js](#vuejs)
  - [React](#react)
  - [SASS / SCSS](#sass--scss)
- [License](#license)

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
import kingsChatWebSdk from 'kingschat-web-sdk';
```

### login

Use this function to get KingsChat's authenticate code, that you will need for any KingsChat request.
You have to pass [login options](#loginoptions-interface).

After user will login and allow a permissions, **Promise** will resolve with [authenticationTokenResponse](#authenticationtokenresponse-interface) payload.
Make sure to store these tokens in your application for later use.

You will get your clientId on [KingsChat's Developer Site](https://developer.kingsch.at/)

```javascript
kingsChatWebSdk.login(loginOptions);
```

#### loginOptions Interface:

```typescript
interface loginOptionsI {
  // Scopes is an Array of scopes you want access
  scopes: string; // ex. ["send_chat_message"]
  // Your clientId generated on KingsChat's Developer Site
  clientId: string; // ex. 'a1234567-abcd-1234-abcd-12345abc1234'
}
```

#### authenticationTokenResponse Interface:

```typescript
interface authenticationTokenResponseI {
  // Access Token used for every KingsChat Request
  accessToken: string;
  // time in milliseconds until token expires
  expiresInMillis: number;
  // Refresh Token is used for refreshing Access Token
  refreshToken: string;
}
```

### refreshAuthenticationToken

Use this function to refresh / get KingsChat's authenticate code again.
You have to pass [refreshAuthenticationTokenOptions](#refreshauthenticationtokenoptions-interface).

**Promise** will resolve with [authenticationTokenResponse](#authenticationtokenresponse-interface) payload.
Make sure to store these tokens in your application for later use.

```javascript
kingsChatWebSdk.refreshAuthenticationToken(refreshAuthenticationTokenOptions);
```

#### refreshAuthenticationTokenOptions Interface:

```typescript
interface refreshAuthenticationTokenOptionsI {
  // Your clientId generated on KingsChat's Developer Site
  clientId: string; // ex. 'a1234567-abcd-1234-abcd-12345abc1234'
  // Refresh token you got from login function
  refreshToken: string;
}
```

### sendMessage


Use this function to send text message to KingsChat user as user you logged on with [login function](#login)
You have to pass [sendMessageOptions](#sendmessageoptions-interface).

**Promise** will resolve without payload after message being sent.


```javascript
kingsChatWebSdk.sendMessage(sendMessageOptions);
```

#### sendMessageOptions Interface:

```typescript
interface sendMessageOptionsI {
  message: string; // Message you want to send to KingsChat user
  userIdentifier: string; // You have to know KingsChat userId 
  accessToken: string; // You got that from login / refresh function
}
```

## Styles

Import **styles.min.css** in your project.

If you installed package then our styles are located in `kingschat-web-sdk/dist/stylesheets/style.min.css`

Alternatively you can add latest **stylesheet link** into html head:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/kingschat-web-sdk/dist/stylesheets/style.min.css"
/>
```

or specific version of it:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/kingschat-web-sdk@0.1.0/dist/stylesheets/style.min.css"
/>
```

then add some `a` element with one of the classes:

- `kc-web-sdk-btn` - for normal button
- `kc-web-sdk-btn-m` - for medium size button
- `kc-web-sdk-btn-s` - for small size button

![](https://appunite-blog.s3.eu-central-1.amazonaws.com/images/05efdffc/1935/Image%202019-05-29%20at%203.02.40%20PM.png)

```html
<a class="kc-web-sdk-btn"></a>
<a class="kc-web-sdk-btn-m"></a>
<a class="kc-web-sdk-btn-s"></a>
```

## Usage

### Webpack

inside **main.js** / **main.ts**

```javascript
import 'kingschat-web-sdk/dist/stylesheets/style.min.css';
```

inside any HTML template

```html
<a class="kc-web-sdk-btn"></a>
```

### Vue.js

inside **any component** or **App.vue**

```vue
<template>
  <a class="kc-web-sdk-btn" @click="loginWithKingsChat"></a>
</template>

<script>
import kingsChatWebSdk from 'kingschat-web-sdk';

export default {
  methods: {
    loginWithKingsChat() {
      kingsChatWebSdk.login(loginOptions)
      .then(authenticationTokenResponse => ...)
      .catch(error => ...);
    },
    refreshKingsChatAuthenticationToken() {
      kingsChatWebSdk.refreshAuthenticationToken(refreshAuthenticationTokenOptions)
      .then(authenticationTokenResponse => ...)
      .catch(error => ...);
    },
    sendKingsChatMessageRequest() {
      kingsChatWebSdk.sendMessage(sendMessageOptions)
      .then(() => ...)
      .catch(error => ...);
    }
  },
};
</script>

<style src="kingschat-web-sdk/dist/stylesheets/style.min.css"></style>
```

or

```vue
<template>
  <a class="kc-web-sdk-btn" @click="loginWithKingsChat"></a>
</template>
<script>
import kingsChatWebSdk from 'kingschat-web-sdk';
import 'kingschat-web-sdk/dist/stylesheets/style.min.css';

export default {
  methods: {
    loginWithKingsChat() {
      kingsChatWebSdk.login(loginOptions)
      .then(authenticationTokenResponse => ...)
      .catch(error => ...);
    },
    refreshKingsChatAuthenticationToken() {
      kingsChatWebSdk.refreshAuthenticationToken(refreshAuthenticationTokenOptions)
      .then(authenticationTokenResponse => ...)
      .catch(error => ...);
    },
    sendKingsChatMessageRequest() {
      kingsChatWebSdk.sendMessage(sendMessageOptions)
      .then(() => ...)
      .catch(error => ...);
    }
  },
};
</script>
```

### React

inside **any React component**

```javascript
import kingsChatWebSdk from 'kingschat-web-sdk';
import 'kingschat-web-sdk/dist/stylesheets/style.min.css';

function loginWithKingsChat() {
  kingsChatWebSdk.login(loginOptions)
  .then(authenticationTokenResponse => ...)
  .catch(error => ...);
}
function refreshKingsChatAuthenticationToken() {
  kingsChatWebSdk.refreshAuthenticationToken(refreshAuthenticationTokenOptions)
  .then(authenticationTokenResponse => ...)
  .catch(error => ...);
}
function sendKingsChatMessageRequest() {
  kingsChatWebSdk.sendMessage(sendMessageOptions)
  .then(() => ...)
  .catch(error => ...);
}

export function KingsChatButton() {
  return <a className="kc-web-sdk-btn" onClick={loginWithKingsChat} />;
}
```

### Angular

inside **any Angular component**

```javascript
import { Component } from '@angular/core';
import kingsChatWebSdk from 'kingschat-web-sdk';
import 'kingschat-web-sdk/dist/stylesheets/style.min.css';

@Component({
  template: `
    <a class="kc-web-sdk-btn" (click)="loginWithKingsChat()"></a>
  `,
})
export class customComponent {
  loginWithKingsChat() {
    kingsChatWebSdk.login(loginOptions)
    .then(authenticationTokenResponse => ...)
    .catch(error => ...);
  }
  refreshKingsChatAuthenticationToken() {
    kingsChatWebSdk.refreshAuthenticationToken(refreshAuthenticationTokenOptions)
    .then(authenticationTokenResponse => ...)
    .catch(error => ...);
  }
  sendKingsChatMessageRequest() {
    kingsChatWebSdk.sendMessage(sendMessageOptions)
    .then(() => ...)
    .catch(error => ...);
  }
}
```

### SASS / SCSS

```scss
@import '~kingschat-web-sdk/dist/stylesheets/style.min.css';
```

## License

ISC © [KingsChat](https://github.com/kingschat)
