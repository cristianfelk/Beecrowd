let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let A = +lines.shift()
let B = +lines.shift()
let C = +lines.shift()
let D = +lines.shift()
console.log("DIFERENCA =",(A*B-C*D))