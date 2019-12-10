/**
 * 给一个正整数，计算它是哪几个连续正整数的和
 * input: 15
 * output: 7-8, 4-5-6, 1-2-3-4-5
 *
 * 思路
 */
function cal(k) {
  const arr = []

  for (let i = k - 1; i > 0; i--) {
    const res = getSum(i, 0)

    if (res) {
      arr.push([res, i])
    }
  }

  function getSum(t, sum) {
    if (t <= 0) {
      return false
    }

    if (sum + t === k) {
      return t
    }

    if (sum + t < k) {
      return getSum(t - 1, sum + t)
    }

    if (sum + t > k) {
      return false
    }
  }

  return arr
}

module.exports = cal
