const requestPromise = require('request-promise')

module.exports = (endpointUrlCheckToken, clientId, clientSecret, token) => {
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