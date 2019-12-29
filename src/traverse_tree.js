/**
 * 遍历二叉树
 */
function traverse(node) {}

// 深度优先
function deep(ro) {
  if (ro.left) {
    deep(ro.left)
  }

  if (ro.right) {
    deep(ro.right)
  }
}

// 深度优先，非递归版
function deep_no_rec(ro) {
  const tmp = [ro]
  let p = tmp[0]

  while (p) {
    traverse(p)

    const first = tmp[0]

    if (first.left) {
      tmp.unshift(first.left)
    } else {
      if (first.right) {
        tmp.unshift(first.right)
      } else {
        tmp.splice(0, 1)
      }
    }

    p = tmp[0]
  }
}

// 广度优先
function wide(arr) {
  arr.forEach(traverse)

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
