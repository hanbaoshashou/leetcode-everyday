function swap(a, b, arr) {
  const t = arr[a]
  arr[a] = arr[b]
  arr[b] = t
}

function cal(arr) {
  let j = 0
  let k = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    if (j == k) {
      break
    }

    const f = arr[j]
    const e = arr[k]

    if (f % 2 === 0) {
      if (e % 2 === 0) {
        k--
      } else {
        swap(j, k, arr)
        j++
        k--
      }
    } else {
      if (e % 2 === 0) {
        swap(j, k, arr)
        j++
        k--
      } else {
        j++
      }
    }
  }

  return arr
}

console.log(cal([4, 1, 7, 8]))
