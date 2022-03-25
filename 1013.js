let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a);  
let [a , b, c] = pegarValores(lines.shift());

let result = ((a + b + Math.abs(a - b)) / 2)
let maior = ((result + c + Math.abs(result - c)) / 2)
console.log(`${maior} eh o maior`)