let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n');

let valor = +lines.shift()
const notas = [100, 50, 20, 10, 5, 2, 1]
console.log(valor)
for (let nota of notas) {
let qNotas = Math.floor(valor/nota)
console.log(`${qNotas} nota(s) de R$ ${nota},00`)
valor %= nota
}