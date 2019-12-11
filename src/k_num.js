/**
 * 求一个数组中第k大的数
 *
 * 思路
 * 二分查找
 */

function cal(arr, k) {
  if (arr.length == 1 && k == 1) {
    return arr[0]
  }

  const i = Math.floor(arr.length / 2)
  const p = arr[i]
  arr.splice(i, 1)

  const left = []
  const right = []

  arr.forEach(e => {
    if (e >= p) {
      left.push(e)
    } else {
      right.push(e)
    }
  })

  if (left.length >= k) {
    return cal(left, k)
  } else {
    if (left.length === k - 1) {
      return p
    } else {
      return cal(right, k - left.length - 1)
    }
  }
}

console.log(cal([1, 3, 11, 5, 0], 2))
