const reverse = require('./reverse_list')

test('reverse_list', () => {
  const e = { value: 'e', next: null }
  const d = { value: 'd', next: e }
  const c = { value: 'c', next: d }
  const b = { value: 'b', next: c }
  const a = { value: 'a', next: b }

  let head = reverse(a)
  let sum = ''

  while (head) {
    sum += head.value
    head = head.next
  }

  expect(sum).toBe('edcba')
})
