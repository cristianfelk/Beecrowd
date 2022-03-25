let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a);  
let [a, b, c] = pegarValores(lines.shift());

let TRIANGULO  = (a * c) / 2
let CIRCULO = 3.14159 * (c * c)
let TRAPEZIO = (a + b) * c /2
let QUADRADO = (b * b)
let RETANGULO = (a * b)

console.log(`TRIANGULO: ${TRIANGULO.toFixed(3)}`)
console.log(`CIRCULO: ${CIRCULO.toFixed(3)}`)
console.log(`TRAPEZIO: ${TRAPEZIO.toFixed(3)}`)
console.log(`QUADRADO: ${QUADRADO.toFixed(3)}`)
console.log(`RETANGULO: ${RETANGULO.toFixed(3)}`)