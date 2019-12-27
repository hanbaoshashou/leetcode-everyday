/**
 * 大数相乘
 *
 * 思路：
 * 1. 将一个数转换成对象数组， 123 -> [{v: 1, zeroNum: 2}, {v:2, zeroNum: 1}, {v: 3, zeroNum:1}]
 * 2. 将两个数组里的各个元素两两相乘，放到一个新数组中
 * 3. 将新数组中的各个元素相加再转化成字符串
 *
 * 注意点：
 * 1. v大于9时需要拆分，{v: 12, zeroNum: 10} -> [{v: 1, zero: 11}, {v: 2, zeroNum: 10}]
 */
function cal(str1, str2) {
  const arr1 = getEl(str1)
  const arr2 = getEl(str2)

  const res = []

  arr1.forEach(i => {
    arr2.forEach(j => {
      const v = multi(i, j)
      res.push(...v)
    })
  })

  return plus(res)
}

function getEl(str) {
  const re = str.split('').reverse()

  const arr = []

  re.forEach((c, i) => {
    arr.push({
      v: Number(c),
      zeroNum: i
    })
  })

  return arr
}

function spliteEl(el) {
  if (el.v > 9) {
    const [a, b] = String(el.v).split('')

    return [
      {
        v: Number(a),
        zeroNum: el.zeroNum + 1
      },
      {
        v: Number(b),
        zeroNum: el.zeroNum
      }
    ]
  } else {
    return [el]
  }
}

function multi(el1, el2) {
  const el = {
    v: el1.v * el2.v,
    zeroNum: el1.zeroNum + el2.zeroNum
  }

  return spliteEl(el)
}

function plus(arr) {
  let sum = ''
  let i = 0

  while (arr.length > 0) {
    const removeList = []

    const all = arr.filter((e, index) => {
      if (e.zeroNum === i) {
        removeList.push(index)
        return true
      } else {
        return false
      }
    })

    // remove
    removeList.forEach(j => (arr[j] = null))
    arr = arr.filter(e => !!e)

    const v = all.reduce((s, el) => s + el.v, 0)

    const sped = spliteEl({
      v,
      zeroNum: i
    })

    if (sped.length == 2) {
      const [a, b] = sped
      sum = String(b.v) + sum
      arr.push(a)
    } else {
      const b = sped[0]
      sum = String(b.v) + sum
    }

    i++
  }

  return sum
}
