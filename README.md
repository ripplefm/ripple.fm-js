# ripple.fm

![](https://travis-ci.org/ripplefm/ripple.fm-js.svg?branch=master)

Javascript client for the ripple.fm REST API. Supports using existing access tokens and will request a refresh if the current access token expires. The token storage method is up to the application.

# Installation

`yarn add ripple.fm`

or

`npm install --save ripple.fm`

# Configuration

To begin using the API client we must configure and create an instance.

### Simple Example

```js
import api from 'ripple.fm';

function myRefreshFunction() {
  // refresh access token here
}

const ripple = api.create({
  access: "some-token", // optional access token
  baseURL: "https://api.ripple.fm", // ripple.fm core api base url
  authURL: "https://accounts.ripple.fm", // accounts api base url
  onAccessTokenExpire: myRefreshFunction // access tokens are short lived and need to be refreshed
});

// begin using api
async function() {
  const stations = await ripple.getStations();
}
```

### onAccessTokenExpire Implementation Example

An example of the configuration and refreshing access tokens in production is available [here.](https://github.com/ripplefm/web/blob/master/src/js/services/ripple-api.js)
