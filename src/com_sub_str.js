/**
 * 计算两个字符串的最长公共子串
 *
 * 思路：
 * 递归，从大到小，列出较短字符串的所有子串，一旦包含就返回改子串
 */
function cal(str1, str2) {
  const sub_s = str1.length > str2.length ? str2 : str1
  const fath_s = str1.length > str2.length ? str1 : str2

  function ifExist(s) {
    return fath_s.includes(s)
  }

  function trans(str) {
    if (str.length == 1) {
      return ifExist(str) ? str : false
    }

    const v = ifExist(str)

    if (v) {
      return str
    } else {
      const v1 = trans(str.slice(1, str.length))
      const v2 = trans(str.slice(0, str.length - 1))

      if (v1 && v2) {
        return v1.length > v2.length ? v1 : v2
      } else {
        return v1 || v2
      }
    }
  }

  return trans(sub_s)
}

console.log(cal('abckdefg', 'bcdg'))
