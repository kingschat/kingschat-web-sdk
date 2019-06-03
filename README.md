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
  - [login](#login)
    - [login options interface](#loginoptions-interface)
    - [authentication token response interface](#authtokenresponse-interface)
  - [refreshAuthToken](#refreshauthtoken)
  - [sendMessage](#sendmessage)
- [Styles](#styles)
- [Usage](#usage)
  - [Static Site](#static-site)
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
import kingsChatWebSdk from "kingschat-web-sdk";
```


### login

Use this function to get KingsChat's authenticate code, that you will need for any KingsChat request.
You have to pass your **callback function** and **login options**.

You will get your clientId on [KingsChat's Developer Site](https://developer.kingsch.at/)

```javascript
kingsChatWebSdk.login(callBackFunction, loginOptions);

```

where **callBackFunction** and **loginOptions**:
 
```javascript
const callBackFunction(authTokenResponse) {
  // authTokenResponse will include all fields from authTokenResponse Interface listed below
  // You should store KingsChat token somewhere
}
const loginOptions = {
  // login options must include all of loginOptions Interface fields
  scopes: ["send_chat_message"],
  clientId: 'a1234567-abcd-1234-abcd-12345abc1234'
}
```

##### loginOptions Interface: 
```typescript
interface loginOptionsI {
  // Scopes is an Array of scopes you want access
  scopes: string;
  // Your clientId generated on KingsChat's Developer Site
  clientId: string;
}
```

##### authTokenResponse Interface: 
```typescript
interface authTokenResponseI {
  // Access Token used for every KingsChat Request
  accessToken: string;
  // time in milliseconds until token expires
  expiresInMillis: number;
  // Refresh Token is used for refreshing Access Token
  refreshToken: string;
}
```

### refreshAuthToken

This function call `callbackFunction` with `authTokenResponseI` interface as param

### sendMessage

This function call `callbackFunction` with `authTokenResponseI` interface as param


## Styles

Import **styles.min.css** in your project.

If you installed package then our styles are located in `kingschat-web-sdk/dist/stylesheets/style.min.css`

Alternatively you can add latest **stylesheet link** into html head: 
```html
<link rel="stylesheet" href="https://unpkg.com/kingschat-web-sdk/dist/stylesheets/style.min.css">
``` 

or specific version of it:

```html
<link rel="stylesheet" href="https://unpkg.com/kingschat-web-sdk@0.0.4/dist/stylesheets/style.min.css">
``` 

then add some `a` element with one of the classes:
-   `kc-web-sdk-btn` - for normal button
-   `kc-web-sdk-btn-m` - for medium size button
-   `kc-web-sdk-btn-s` - for small size button

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
import "kingschat-web-sdk/dist/stylesheets/style.min.css"
```
inside any HTML template
```html
<a class="kc-web-sdk-btn"></a>
```

### Vue.js

inside **any component** or **App.vue**

```vue
<template>
  <a class="kc-web-sdk-btn" @click="loginWithKingschat"></a>
</template>

<script>
import kingsChatWebSdk from "kingschat-web-sdk";

export default {
  methods: {
    loginWithKingschat () {
      kingsChatWebSdk.login(callbackFunc, options)
    }
  }
}
</script>

<style src="kingschat-web-sdk/dist/stylesheets/style.min.css"></style>
```

or

```vue
<template>
  <a class="kc-web-sdk-btn" @click="loginWithKingschat"></a>
</template>
<script>
import kingsChatWebSdk from "kingschat-web-sdk";
import "kingschat-web-sdk/dist/stylesheets/style.min.css"

export default {
  methods: {
    loginWithKingschat () {
      kingsChatWebSdk.login(callbackFunc, options)
    }
  }
}
</script>
```

### React

inside **any React component**

```javascript
import kingsChatWebSdk from "kingschat-web-sdk";
import "kingschat-web-sdk/dist/stylesheets/style.min.css"

function loginWithKingschat() {
  kingsChatWebSdk.login(callbackFunc, options)
}

function KingsChatButton() {
  return (
    <a className="kc-web-sdk-btn" onClick={loginWithKingschat} />
  );
}
```

### Angular

inside  **any Angular component**

```javascript
import { Component } from "@angular/core";
import kingsChatWebSdk from "kingschat-web-sdk";
import "kingschat-web-sdk/dist/stylesheets/style.min.css";

@Component({
  template: `
    <a class="kc-web-sdk-btn" (click)="loginWithKingschat()"></a>
  `
})
export class customComponent {
  loginWithKingschat() {
    kingsChatWebSdk.login(callbackFunc, options)
  }
}

```

### SASS / SCSS

```scss
@import "~kingschat-web-sdk/dist/stylesheets/style.min.css";
```

## License

ISC © [KingsChat](https://github.com/kingschat)
