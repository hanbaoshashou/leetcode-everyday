/**
 * 反转链表
 * input: a -> b -> c
 * output: a <- b <- c
 *
 * 思路
 * 用三个指针指向前3个元素；
 * 改变前两个元素的指向；
 * 将3个指针依次往后移动一位；
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
