
const { createQueriesMutations } = require('../utility/createField')

const todo = createQueriesMutations(require('./todo'))

module.exports = {
  queries: {
    ...todo.queries
  },
  mutations: {
    ...todo.mutations
  }
}