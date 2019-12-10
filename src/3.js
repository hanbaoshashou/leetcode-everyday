function cal(str) {
  const arr = str.split('')

  let all = []
  for (let i = 0; i < arr.length; i++) {
    const next = []

    if (all.length === 0) {
      const v = append(arr[i], '')
      next.push(...v)
    }

    all.forEach(el => {
      const v = append(arr[i], el)
      next.push(...v)
    })

    all = next
  }

  function append(c, str) {
    const res = []

    if (str.length === 0) {
      res.push(c)
      return res
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

  return all
}

console.log(cal('abcd'))
