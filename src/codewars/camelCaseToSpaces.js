/** My Solution */

function solution(string) {
  let characters = string.split('')
  let newString = ''
  characters.forEach((str) => {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      newString = newString.concat(' ')
    }
    newString = newString.concat(str)
  })
  return newString
}

/** Solution Codewars */

function solution(string) {
  return string.replace(/([A-Z])/g, ' $1')
}
