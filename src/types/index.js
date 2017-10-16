
const { createQueriesMutations, combineQueryMutations } = require('../utility/createField')

module.exports = combineQueryMutations(require('./todo'), require('./blog'), require('./test'))