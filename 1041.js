let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let entrada = lines.shift().split(" ")
let x = parseFloat(entrada[0])
let y = parseFloat(entrada[1])

if (x == 0 && y == 0) {
    console.log('Origem')
} else if (x == 0) {
    console.log('Eixo Y')
} else if (y == 0) {
    console.log('Eixo X')
} else if (y > 0 && x > 0) {
    console.log('Q1')
} else if (y > 0 && x < 0) {
    console.log('Q2')
} else if (y < 0 && x < 0) {
    console.log('Q3')
} else if (y < 0 && x > 0) {
    console.log('Q4')
}
