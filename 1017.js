let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let horas = +lines.shift()
let velocidade = +lines.shift()

let litros = (velocidade * horas / 12)
console.log(`${litros.toFixed(3)}`)