function cal(arr1, arr2) {
  const all = [...arr1, ...arr2]

  const map = new Map()

  all.forEach(e => {
    if (map.get(e)) {
      map.set(e, map.get(e) + 1)
    } else {
      map.set(e, 1)
    }
  })

  const res = []

  map.forEach((k, v) => {
    if (v === 2) {
      res.push(k)
    }
  })

  return res
}

console.log(cal([1, 2], [2]))
