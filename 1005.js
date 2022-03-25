let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let A = +lines.shift()
let B = +lines.shift()

let total = ((A*3.5)+(B*7.5))/ 11
console.log(`MEDIA = ${total.toFixed(5)}`)