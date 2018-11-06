const requestPromise = require('request-promise');

module.exports.getHelloWorld = () => {
    return 'Hello World'
}

module.exports.checkToken = (endpointUrlCheckToken, clientId, clientSecret, token) => {
    const options = {
        method: 'POST',
        uri: endpointUrlCheckToken,
        auth: {
            user: clientId,
            password: clientSecret
        },
        form: {
            token
        },
        json: true
    }
    return requestPromise(options)
}

module.exports.userinfo = (endpointUrlUserinfo, token) => {
    const options = {
        method: 'GET',
        uri: endpointUrlUserinfo,
        headers: {
            'Content-Type': 'application/json'
        },
        auth: {
            bearer: token,
        },
        json: true
    }
    return requestPromise(options)
}