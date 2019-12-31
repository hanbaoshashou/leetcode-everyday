/**
 * 替换字符串
 */
function replace(str, s, t) {
  const new_arr = []

  for (let i = 0; i < str.length; i++) {
    const e = str[i]

    if (e === s[0]) {
      const isSame = str.slice(i, i + s.length) === s

      if (isSame) {
        new_arr.push(t)
        i = i + s.length - 1
      } else {
        new_arr.push(e)
      }
    } else {
      new_arr.push(e)
    }
  }

  return new_arr.join('')
}

console.log(replace('a vc devcv', 'vc', 'kkk'))
