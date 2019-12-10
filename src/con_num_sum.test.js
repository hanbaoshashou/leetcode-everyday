const cal = require('./con_num_sum.js')

test('con_num_sum', () => {
  const v = cal(15)

  v.forEach(arr => {
    const [s, e] = arr
    let sum = 0

    for (let i = s; i <= e; i++) {
      sum += i
    }

    expect(sum).toEqual(15)
  })
})
