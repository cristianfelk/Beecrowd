let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let entrada = lines.shift().split(" ")
let prod = parseInt(entrada[0])
let quant = parseInt(entrada[1])
let total

switch (prod) {
    case 1:
        total = quant * 4.00; break;
    case 2:
        total = quant * 4.50; break;
    case 3:
        total = quant * 5.00; break;
    case 4:
        total = quant * 2.00; break;
    case 5:
        total = quant * 1.50; break;
    default:
        total = 0
}

console.log(`Total: R$ ${total.toFixed(2)}`)
