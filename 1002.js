let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n');

let raio = +lines.shift()
let area = 3.14159*Math.pow(raio,2)
console.log(`A=${area.toFixed(4)}`)