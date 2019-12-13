/**
 * 求一个字符串中的最长回文子串
 */
function isRe(s) {
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  )
}

function cal(str) {
  const dp = []

  for (let i = 0; i < str.length; i++) {
    dp[i] = []

    for (let j = i + 1; j <= str.length; j++) {
      const s = str.slice(i, j)

      if (isRe(s)) {
        dp[i][j] = s
        console.log(dp[i][j])
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
    console.log(dp[i])
  }
}

cal('accdcck')
