function persistence(num) {
  if (num < 10) return 0
  let newNum = num
  counter = 0
  while (newNum > 9) {
    counter += 1
    let digits = `${newNum}`.split('')
    newNum = digits.reduce((val, ac) => parseInt(val) * ac, 1)
  }
  return counter
}
persistence(999)
