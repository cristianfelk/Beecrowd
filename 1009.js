let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let nome = lines.shift()
let SA = +lines.shift()
let VENDAS = +lines.shift()
let comissao = 15

let totalComissao = (VENDAS / 100) * comissao
let TOTAL = (totalComissao + SA).toFixed(2)

console.log(`TOTAL = R$ ${TOTAL}`)