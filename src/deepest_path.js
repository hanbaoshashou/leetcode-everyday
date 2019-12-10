/**
 * 计算一棵二叉树的最深路径并列出
 */
function cal(ro) {
  const arr = []

  function tran(r, path) {
    if (r.left) {
      tran(r.left, [...path, r.left])
    } else {
      arr.push(path)
    }

    if (r.right) {
      tran(r.right, [...path, r.right])
    } else {
      arr.push(path)
    }
  }
}

module.exports = cal
