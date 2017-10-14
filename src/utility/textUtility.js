const mapEnclosedValueArgs = (value, args, delimiterStart, delimiterEnd) => {
    const regexValue = new RegExp(`((?!^)${delimiterStart}.*?${delimiterEnd})`)
    return value.split(regexValue).reduce((results, item) => {
        if (item.includes('{')) {
            const newItem = args[item.replace(/{/, '').replace(/}/, '')] || ''
            results += newItem
        } else {
            results += item
        }
        return results
    }, '')
}

module.exports = {
    mapEnclosedValueArgs
}