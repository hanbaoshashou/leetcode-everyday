/**
 * 最大子序列和
 *
 * 思路:
 * 1. dp: f[i] = Max(f[i - 1] + arr[i], arr[i])
 * 2. 穷举所有子序列
 */
function cal(arr) {
  const dp = []

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      dp[i] = arr[i]
    } else {
      dp[i] = Math.max(dp[i - 1] + arr[i], arr[i])
    }
  }

  return Math.max(...dp)
}
