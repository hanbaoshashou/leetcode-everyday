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

  return JSON.stringify(b)
}

const e = { value: 'e', next: null }
const d = { value: 'd', next: e }
const c = { value: 'c', next: d }
const b = { value: 'b', next: c }
const a = { value: 'a', next: b }

console.log(reverse(a))
