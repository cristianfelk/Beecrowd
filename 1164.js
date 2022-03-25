let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let qValores = +lines.shift()
let valor = 0
let soma = 0
for (let i = 0; i < qValores; i++) {
    valor = +lines.shift()

    let count = 1
    while (count <= valor / 2) {

        if(valor % count == 0) {
            soma += count
        }
        count++
        
    }

    if (soma == valor) {
        console.log(`${valor} eh perfeito`)
    } else {
        console.log(`${valor} nao eh perfeito`)
    }

    soma = 0
}