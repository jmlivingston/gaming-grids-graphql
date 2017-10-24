const fetch = require('node-fetch');

const constants = require('../constants')

const headers = { 'Content-Type': 'application/json; charset=utf-8', 'gg-client-api-key': 'C434EDE3-2E7E-4B9D-A070-58B2CF94846D' }

const getBaseUrl = url => {
  // HACK: Temporary - This belongs in the schema
  let apiUrl = constants.API_CLIENT_URL

  return apiUrl
}

module.exports = {
  GET: async ({ url }) => {
    console.log(`${getBaseUrl(url)}${url}`);
    const res = await fetch(`${getBaseUrl(url)}${url}`, { method: 'GET', headers })
    const json = await res.json()
    return res.status === 404 ? null : json // TODO: Add better error handling    
  },
  POST: ({ url, body }) => {
    return fetch(`${getBaseUrl(url)}${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => {      
      return res.json()
    })
  },
  PUT: ({ url, body }) => {
    return fetch(`${getBaseUrl(url)}${url}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      return { ok: res.ok, status: res.status, statusText: res.statusText } // TODO: Add better error handling
    })
  },
  DELETE: ({ url }) => {
    return fetch(`${getBaseUrl(url)}${url}`, {
      method: 'DELETE'
    }).then(res => {
      return { ok: res.ok, status: res.status, statusText: res.statusText } // TODO: Add better error handling
    })
  }
}
