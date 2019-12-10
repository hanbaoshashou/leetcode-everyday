/**
 * 给定一个字符串，列出字符串中的字母能组成的所有组合
 * input：abc
 * output: 'cba', 'bca', 'bac', 'cab', 'acb', 'abc'
 *
 * 思路：
 * 每次新增一个字母的时候，把它放在上次结果的每个字符串的各个位置
 * a, b, c
 * a -> [a]
 * b -> a: ab, ba -> [ab, ba]
 * c -> 对于ab: cab, acb, abc; 对于ba: cba, bca, bac; -> [cab, acb, abc, cba, bca, bac]
 */
function cal(str) {
  let all = []

  for (let i = 0; i < str.length; i++) {
    const next = []

    if (all.length === 0) {
      next.push(str[i])
    }

    all.forEach(el => {
      const v = append(str[i], el)
      next.push(...v)
    })

    all = next
  }

  return all
}

function append(c, str) {
  const res = []

  if (str.length === 0) {
    return [c]
  }

  for (let j = 0; j <= str.length; j++) {
    if (j == 0) {
      res.push(c + str)
    } else if (j === str.length) {
      res.push(str + c)
    } else {
      res.push(str.slice(0, j) + c + str.slice(j, str.length))
    }
  }

  return res
}

module.exports = cal
