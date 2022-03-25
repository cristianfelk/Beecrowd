let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let qValores = +lines.shift()
for (let x = 0; x < qValores; x++) {
    let valor = +lines.shift()
    let count = 2
    let aux = 0
    while (count < valor) {
        if (valor % count == 0) {
            aux = count
        }
        count++
    }

    if (aux != 0){
        console.log(`${valor} nao eh primo`)
    } else {
        console.log(`${valor} eh primo`)
    }
}