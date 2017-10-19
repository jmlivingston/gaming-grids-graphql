const { encode } = require('querystring')

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
        query += '?' + encode(values)
    }
    return query
}

module.exports = {
    encodeUriParams,
    mapEnclosedValueArgs
}