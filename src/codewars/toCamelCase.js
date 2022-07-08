/* My Solution */

function toCamelCase(str) {
  let newString = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '-' && str[i] !== '_') {
      newString = newString.concat(str[i])
    } else {
      newString = newString.concat(str[i + 1].toUpperCase())
      i += 1
    }
  }
  return newString
}

/* Best Solution */

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}
