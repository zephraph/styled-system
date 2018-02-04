const propTypes = require('./prop-types')

const keys = Object.keys(propTypes)

const blacklist = keys
  .reduce((a, key) => {
    const props = Object.keys(propTypes[key])
    return [ ...a, ...props ]
  }, [])

module.exports = blacklist
