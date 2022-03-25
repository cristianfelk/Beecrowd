let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let entrada = []
let positivos = 0
let soma = 0

for (let i = 0; i < 6; i++) {
    entrada[i] = +lines.shift()
    if (entrada[i] > 0 ) {
    positivos ++
    soma += entrada[i]
    }
}
let media = soma / positivos
console.log(`${positivos} valores positivos`)
console.log(`${media.toFixed(1)}`)