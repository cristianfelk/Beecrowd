let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let A = +lines.shift()
let B = +lines.shift()
let N = +lines.shift()

console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${(B*N).toFixed(2)}`)