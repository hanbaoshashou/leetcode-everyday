function cal(arr, m) {
  const table = []

  for (let i = 0; i < arr.length; i++) {
    table[i] = []

    for (let j = 0; j < arr.length; j++) {
      if (j <= i) {
        table[i][j] = 0
      } else {
        table[i][j] = arr[j] - arr[i]
      }
    }
  }

  function pick(table, x, y) {
    const el = table[x][y]

    table[x] = table[x].map(e => null)

    for (let i = 0; i < arr.length; i++) {
      table[i][y] = null
    }

    pick()

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        pick(i, j, table)
      }
    }
  }

  console.log(table)
}

cal([1, 5, 8, 2, 11, 0])
