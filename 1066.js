let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let entrada = []
let pares = 0
let impares = 0
let positivos = 0
let negativos = 0

for (let i = 0; i < 5; i ++) {
    entrada[i] = +lines.shift()
    if (entrada[i] % 2 === 0){
        pares++
    } 
    else {
        impares++
    }

    if (entrada[i] > 0) {
        positivos++
    } 
    else if (entrada[i] < 0) {
        negativos++
    }
}
console.log(`${pares} valor(es) par(es)`)
console.log(`${impares} valor(es) impar(es)`)
console.log(`${positivos} valor(es) positivo(s)`)
console.log(`${negativos} valor(es) negativo(s)`)