const fetch = require('node-fetch');

const constants = require('../constants')

const headers = { 'Content-Type': 'application/json' }

module.exports = {
  GET: ({ url }) => {
    return fetch(`${constants.BASE_URL}${url}`).then(res => {
      return res.status === 404 ? null : res.json() // TODO: Add better error handling
    })
  },
  POST: ({ url, body }) => {
    return fetch(`${constants.BASE_URL}${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      return res.json()
    })
  },
  PUT: ({ url, body }) => {
    return fetch(`${constants.BASE_URL}${url}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      return res.status !== 404 // TODO: Add better error handling
    })
  },
  DELETE: ({ url }) => {
    return fetch(`${constants.BASE_URL}${url}`, {
      method: 'DELETE'
    }).then(res => {
      return res.status !== 404 // TODO: Add better error handling
    })
  }
}
