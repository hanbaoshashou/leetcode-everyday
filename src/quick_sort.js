function quick_sort(arr, start, end) {
  start = typeof start === 'number' ? start : 0
  end = typeof end === 'number' ? end : arr.length - 1

  if (start < end) {
    const index = part(arr, start, end)

    quick_sort(arr, start, index - 1)
    quick_sort(arr, index + 1, end)
  }

  return arr
}

function part(arr, start, end) {
  const p = arr[start]
  let index = start + 1

  for (let i = index; i <= end; i++) {
    if (arr[i] < p) {
      swap(arr, index, i)
      index++
    }
  }

  swap(arr, start, index - 1)

  return index - 1
}

function swap(arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function quick_sort2(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const index = Math.floor(arr.length / 2)
  const el = arr[index]

  const left = []
  const right = []

  arr.splice(index, 1)

  arr.forEach(e => {
    if (e < el) {
      left.push(e)
    } else {
      right.push(e)
    }
  })

  return [...quick_sort2(left), el, ...quick_sort2(right)]
}

console.log(quick_sort2([2, 3, 9, 1, 0]))
