const cal = require('./all_char_comb.js')

test('all_char_comb', () => {
  const v = cal('abc')

  expect(v.length).toBe(6)

  v.forEach(str => {
    expect(
      str
        .split('')
        .sort()
        .join('')
    ).toBe('abc')
  })
})
