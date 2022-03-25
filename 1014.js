let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let km = +lines.shift()
let L = +lines.shift()
var distancia = (km / L)
console.log(`${distancia.toFixed(3)} km/l`)