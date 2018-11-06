# corproot-identity-admin
[![NPM version](https://img.shields.io/npm/v/corproot-identity-admin.svg?style=flat)](https://www.npmjs.com/package/corproot-identity-admin)
[![Build Status](https://travis-ci.org/Wenish/corproot-identity-admin.svg?branch=master)](https://travis-ci.org/Wenish/corproot-identity-admin)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Simplified Corproot Identity Service calls for javascript.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install corproot-identity-admin --save
```

## Usage

```js
var corprootIdentityAdmin = require('corproot-identity-admin');
```

## API

### [.checkToken](./src/checkToken/checkToken.js)

Checks token for his validity.

**Params**

* `endpointUrlCheckToken` **{String}**: url endpoint.
* `clientId` **{String}**: client id of corpid service.
* `clientSecret` **{String}**: client secret of corpid service.
* `token` **{String}**: token to validate.
* `returns` **{Promise}**

**Example**

```js
var corprootIdentityAdmin = require('corproot-identity-admin');
corprootIdentityAdmin.checkToken(
    'http://localhost/check_token',
    'YOUR_CLIENT_ID',
    'YOUR_CLIENT_SECRET',
    'TOKEN_TO_VALIDATE'
    )
    .then((results) => {
        //check in results if token valid
    })
    .catch((error => {
        //token not valid
    }))
```

### [.userinfo](./src/userinfo/userinfo.js)

Get userinfo from a usertoken.

**Params**

* `endpointUrlUserinfo` **{String}**: url endpoint.
* `token` **{String}**: usertoken.
* `returns` **{Promise}**

**Example**

```js
var corprootIdentityAdmin = require('corproot-indentity-admin');
corprootIdentityAdmin.userinfo(
    'http://localhost/userinfo',
    'USERTOKEN'
    )
    .then((results) => {
        //check results for userinfo
    })
    .catch((error => {
        //userinfo not found
    }))
```

[![forthebadge](https://forthebadge.com/images/badges/built-with-grammas-recipe.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-water.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/certified-snoop-lion.svg)](https://forthebadge.com)