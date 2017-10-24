const fetch = require('node-fetch');

const headers = { 'Content-Type': 'application/json; charset=utf-8', 'gg-client-api-key': 'C434EDE3-2E7E-4B9D-A070-58B2CF94846D' }

module.exports = {
  GET: async ({ url }) => {
    const res = await fetch(url, { method: 'GET', headers })
    const json = await res.json()
    return res.status === 404 ? null : json // TODO: Add better error handling    
  },
  POST: ({ url, body }) => {
    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => {      
      return res.json()
    })
  },
  PUT: ({ url, body }) => {
    return fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      return { ok: res.ok, status: res.status, statusText: res.statusText } // TODO: Add better error handling
    })
  },
  DELETE: ({ url }) => {
    return fetch(url, {
      method: 'DELETE'
    }).then(res => {
      return { ok: res.ok, status: res.status, statusText: res.statusText } // TODO: Add better error handling
    })
  }
}
