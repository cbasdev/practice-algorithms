function expandedForm(num) {
  let out = ''
  let digits = `${num}`.split('')
  digits.forEach((n, index) => {
    let newValue = parseInt(n) * Math.pow(10, digits.length - index - 1)
    if (newValue) {
      if (index !== digits.length && index !== 0) {
        out = out + ' + '
      }
      out = out + `${parseInt(n) * Math.pow(10, digits.length - index - 1)}`
    }
  })
  return out
}

expandedForm(70304)

/* I dont know if this is good solution... i prefeer mine */
const expandedForm = (n) =>
  n
    .toString()
    .split('')
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join(' + ')
