let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

let valor = 0
for (let x = 0; x <10; x++){
    valor = +lines.shift() 

    if (valor <= 0) {
        valor = 1
    }

    console.log(`X[${x}] = ${valor}`)

}