const fetch = require('node-fetch');

const constants = require('../constants')

const headers = { 'Content-Type': 'application/json' }

module.exports = {
  get: ({ url }) => {
    console.log(url)
    return fetch(`${constants.BASE_URL}${url}`).then(res => res.json())
  },
  add: ({ url, body }) => {
    return fetch(`${constants.BASE_URL}${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    }).then(res => res.json())
  },
  update: ({ url, body }) => {
    return fetch(`${constants.BASE_URL}${url}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      return res.status !== 404 // TODO: Add better error handling
    })
  },
  remove: ({ url }) => {
    return fetch(`${constants.BASE_URL}${url}`, {
      method: 'DELETE'
    }).then(res => {
      return res.status !== 404 // TODO: Add better error handling
    })
  }
}

// const fetch = require('node-fetch');

// const constants = require('../constants')

// const headers = { 'Content-Type': 'application/json' }

// module.exports = {
//   get: ({ url, id = '' }) => {
//     return fetch(`${constants.BASE_URL}${url}/${id}`).then(res => res.json())
//   },
//   add: ({ url, body }) => {
//     return fetch(`${constants.BASE_URL}${url}`, {
//       method: 'POST',
//       headers,
//       body: JSON.stringify(body)
//     }).then(res => res.json())
//   },
//   update: ({ url, id, body }) => {
//     return fetch(`${constants.BASE_URL}${url}/${id}`, {
//       method: 'PUT',
//       headers,
//       body: JSON.stringify(body)
//     }).then(res => {
//       return res.status !== 404 // TODO: Add better error handling
//     })
//   },
//   remove: ({ url, id }) => {
//     return fetch(`${constants.BASE_URL}${url}/${id}`, {
//       method: 'DELETE'
//     }).then(res => {
//       return res.status !== 404 // TODO: Add better error handling
//     })
//   }
// }
