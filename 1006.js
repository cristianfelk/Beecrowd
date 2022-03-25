let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let A = +lines.shift()
let B = +lines.shift()
let C = +lines.shift()

let total = ((A*2)+(B*3)+(C*5))/ 10
console.log(`MEDIA = ${total.toFixed(1)}`)