let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let salario = parseFloat(lines.shift())
let porcentagem = ''
let vAumento = 0

if (salario <= 400) {
    porcentagem += 'Em percentual: 15 %'
    vAumento += salario * 0.15
} 
else if (salario <= 800){
    porcentagem += 'Em percentual: 12 %'
    vAumento += salario * 0.12
    } 
else if (salario <= 1200){
    porcentagem += 'Em percentual: 10 %'
    vAumento += salario * 0.1
    } 
else if (salario <= 2000){
    porcentagem += 'Em percentual: 7 %'
    vAumento += salario * 0.07
    }
else if (salario >= 2000) {
    porcentagem += 'Em percentual: 4 %'
    vAumento += salario * 0.04
    }

let total = salario + vAumento
console.log('Novo salario:', total.toFixed(2))
console.log('Reajuste ganho:', vAumento.toFixed(2))
console.log(porcentagem)