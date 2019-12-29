/**
 * 替换字符串
 */
function replace(str, s, t) {
  const arr = str.split('')
  const s_arr = s.split('')
  const t_arr = t.split('')

  const new_arr = []

  for (let i = 0; i < arr.length; i++) {
    const e = arr[i]

    if (e === s_arr[0]) {
      const isS = isSame(arr.slice(i, i + t_arr.length - 1), s_arr)

      if (isS) {
        new_arr.push(...t_arr)
        i = i + s_arr.length - 1
      } else {
        new_arr.push(e)
      }
    } else {
      new_arr.push(e)
    }
  }

  function isSame(arr1, arr2) {
    return arr1.join('') === arr2.join('')
  }

  return new_arr.join('')
}

console.log(replace('a vc devc', 'vc', 'kkk'))
