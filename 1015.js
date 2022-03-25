let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a);  
let [x1, y1] = pegarValores(lines.shift());
const pegarValores2 = (line) => line.split(" ").map(a => +a);  
let [x2, y2] = pegarValores2(lines.shift());
let p1 = Math.pow(x1-x2,2)
let p2 = Math.pow(y1-y2,2)
let distancia = (Math.sqrt(p1+p2))
console.log(distancia.toFixed(4))