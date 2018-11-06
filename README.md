# sc-corpid

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install sc-corpid --save
```

## Usage

```js
var scCorpid = require('sc-corpid');
```

## API

### [.checkToken](index.js#L3)

Checks token for his validity.

**Params**

* `endpointUrlCheckToken` **{String}**: url endpoint.
* `clientId` **{String}**: client id of corpid service.
* `clientSecret` **{String}**: client secret of corpid service.
* `token` **{String}**: token to validate.
* `returns` **{Promise}**

**Example**

```js
var scCorpid = require('sc-corpid');
scCorpid.checkToken('http://localhost/check_token', 'YOUR_CLIENT_ID', 'YOUR_CLIENT_SECRET', 'TOKEN_TO_VALIDATE')
    .then((results) => {
        //check in results if token valid
    })
    .catch((error => {
        //token not valid
    }))
```
