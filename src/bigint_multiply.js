/**
 * 大数相乘
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
