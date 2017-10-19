const fetch = require('node-fetch');

const constants = require('../constants')

const headers = { 'Content-Type': 'application/json; charset=utf-8', 'gg-client-api-key': 'C434EDE3-2E7E-4B9D-A070-58B2CF94846D' }

module.exports = {
  GET: async ({ url }) => {
    const res = await fetch(`${constants.BASE_URL}${url}`, { method: 'GET', headers })
    const json = await res.json()
    return res.status === 404 ? null : json // TODO: Add better error handling    
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
