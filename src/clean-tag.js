const React = require('react')
const tags = require('html-tags')
const blacklist = require('./blacklist')

const omit = (obj, blacklist) => {
  const next = {}
  for (let key in obj) {
    if (blacklist.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}
const innerRef = props => ({
  ...props,
  ref: props.innerRef
})

const tag = (type = 'div') =>
  class extends React.Component {
    render () {
      const props = omit(
        innerRef(this.props),
        [
          'is',
          'innerRef',
          ...blacklist
        ]
      )
      return React.createElement(
        (this.props.is || type),
        props
      )
    }
  }

tags.forEach(t => {
  tag[t]= tag(t)
})

module.exports = tag
