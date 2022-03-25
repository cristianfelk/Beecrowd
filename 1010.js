let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\r\n')

const pegarValores = (line) => line.split(" ").map(a => +a);  
let [a, b, c] = pegarValores(lines.shift());
const pegarValores2 = (line) => line.split(" ").map(a => +a);  
let [d, e, f] = pegarValores2(lines.shift());

var pagar = ((b*c)+(e*f))
console.log(`VALOR A PAGAR: R$ ${pagar.toFixed(2)}`)