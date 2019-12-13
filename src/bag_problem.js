function cal(arr, p) {
  const dp = []

  for (let i = 0; i < arr.length; i++) {
    dp[i] = []
    const el = arr[i]

    for (let j = 0; j <= p; j++) {
      const real = j + 1

      if (i === 0) {
        if (j === 0) {
          dp[i][j] = 0
        } else {
          if (el.w > j) {
            dp[i][j] = 0
          } else {
            dp[i][j] = el.v
          }
        }
      } else {
        if (j < el.w) {
          dp[i][j] = dp[i - 1][j]
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - el.w] + el.v)
        }
      }
    }
  }

  console.log(dp)

  const all = dp.map(e => e[e.length - 1])

  return Math.max(...all)
}

const arr = [
  { w: 2, v: 3 },
  { w: 3, v: 4 },
  { w: 4, v: 5 },
  { w: 5, v: 6 }
]

const res = cal(arr, 8)
