let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let entrada = []
let pares = 0
for (let i = 0; i < 5; i ++) {
    entrada[i] = +lines.shift()
    if (entrada[i] % 2 === 0) {
        pares ++
    }
}
console.log(`${pares} valores pares`)