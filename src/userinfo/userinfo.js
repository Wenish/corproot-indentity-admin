const requestPromise = require('request-promise')

module.exports = (endpointUrlUserinfo, token) => {
  const options = {
    method: 'GET',
    uri: endpointUrlUserinfo,
    headers: {
      'Content-Type': 'application/json'
    },
    auth: {
      bearer: token
    },
    json: true
  }
  return requestPromise(options)
}
