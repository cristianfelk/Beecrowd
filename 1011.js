let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let pi = 3.14159
let R = +lines.shift()

var volume = ((4/3)*pi*Math.pow(R,3))
console.log(`VOLUME = ${volume.toFixed(3)}`)