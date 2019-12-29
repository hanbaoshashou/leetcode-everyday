/**
 * 将一个字符串拆成多个字符串组合，列出所有组合
 *
 * input: '123'
 * output: [ [ '123' ], [ '1', '23' ], [ '1', '2', '3' ], [ '12', '3' ] ]
 */
function spl(str) {
  const arr = []

  arr.push([str])

  if (str.length == 1) {
    return arr
  }

  for (let i = 1; i < str.length; i++) {
    const s1 = str.slice(0, i)
    const s2 = str.slice(i, str.length)

    const v2 = spl(s2)

    v2.forEach(el2 => {
      arr.push([s1, ...el2])
    })
  }

  return arr
}

console.log(spl('1234'))
