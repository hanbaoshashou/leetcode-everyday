function tranverse(node) {}

function deep(ro) {
  tranverse(ro)

  if (ro.left) {
    deep(ro.left)
  }

  if (ro.right) {
    deep(ro.right)
  }
}

function wide(arr) {
  arr.forEach(tranverse)

  const nextArr = []

  arr.forEach(e => {
    if (e.left) {
      nextArr.push(e.left)
    }
    if (e.right) {
      nextArr.push(e.right)
    }
  })

  wide(nextArr)
}
