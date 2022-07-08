let maxProfit = function (prices) {
  let calculationPrices = []
  prices.forEach((item, index) => {
    for (let i = index + 1; i < prices.length; i++) {
      calculationPrices.push({ [i + 1]: prices[i] - item })
    }
  })
  calculationPrices.sort((a, b) => {
    if (Object.values(a)[0] > Object.values(b)[0]) return 1
    if (Object.values(a)[0] < Object.values(b)[0]) return -1
    return 0
  })

  const maxValue = Object.values(
    calculationPrices[calculationPrices.length - 1]
  )[0]

  return maxValue > 0 ? maxValue : 0
}

maxProfit([7, 1, 5, 3, 6, 4])
