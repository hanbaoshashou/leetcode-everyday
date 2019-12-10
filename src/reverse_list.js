/**
 * 反转链表
 * input: a -> b -> c
 * output: a <- b <- c
 */
function reverse(head) {
  let a = head
  let b = a.next
  let c = b.next

  head.next = null

  while (c) {
    b.next = a
    a = b
    b = c
    c = c.next
  }

  b.next = a

  return b
}

module.exports = reverse
