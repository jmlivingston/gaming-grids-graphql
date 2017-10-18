const fs = require('fs')
const path = require('path')

const basePath = path.join(__dirname, 'src', 'types')
var files = fs
  .readdirSync(basePath)
  .filter(file => file !== 'index.js')
  .map(file => "require('./" + file.replace('.js', '') + "')")

console.log(files)

let fileContents =
  "const { combineQueryMutations } = require('../utility/createField')\n\n"

fileContents += 'const types =[\n  '
fileContents += files.join(',\n  ')
fileContents += '\n]\n\n'
fileContents += 'module.exports = combineQueryMutations(...types)'
fileContents += '\n'

fs.writeFile(path.join(basePath, 'index.js'), fileContents, error => {
  if (error) {
    console.log(error)
  }
})

// const { combineQueryMutations } = require('../utility/createField')

// const types = [
//     require('./todo'),
//     require('./blog'),
//     require('./test')
// ]
// module.exports = combineQueryMutations(...types)
