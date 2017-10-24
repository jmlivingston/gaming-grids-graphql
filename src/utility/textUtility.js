const queryString = require('query-string')

const mapEnclosedValueArgs = (value, args, delimiterStart, delimiterEnd) => {
    const regexValue = new RegExp(`((?!^)${delimiterStart}.*?${delimiterEnd})`)
    const url = value.split(regexValue).reduce((results, item) => {
        if (item.includes('{')) {
            const newItem = args[item.replace(/{/, '').replace(/}/, '')] || ''
            results += newItem
        } else {
            results += item
        }
        return results
    }, '')
    return url
}

const encodeUriParams = values => {
    let query = ''
    if(values) {      
      query = Object.keys(values).reduce((results, key) => {
        if(Object.keys(values[key]).length > 0) {
          results += key + '=&' + queryString.stringify(values[key])
        } else {
          results += queryString.stringify(values[key])
        }
        return results
      }, '?')
      return query
    }


    return query
}

module.exports = {
    encodeUriParams,
    mapEnclosedValueArgs
}