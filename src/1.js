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

console.log(cal(15))
