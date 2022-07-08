var maxSequence = function (arr) {
  let combinationPosibilities = []
  arr.forEach((item, indexItem) => {
    for (let i = indexItem; i < arr.length; i++) {
      let subArray = arr.slice(indexItem, i)
      if (subArray.length > 1) {
        combinationPosibilities.push(arr.slice(indexItem, i))
      }
    }
  })
  let sumSubArrays = combinationPosibilities.map((sub) => {
    return sub.reduce((prev, curr) => prev + curr, 0)
  })
  const maxSum = Math.max(...sumSubArrays)
  return sumSubArrays.length && maxSum > 0 ? maxSum : 0
}
maxSequence([-9, -3, 12, 14, 4, -4, 10, -10, 4])
maxSequence([])
