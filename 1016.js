let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

var X = +lines.shift()
var minutos = (X * 2)
console.log(`${minutos} minutos`)