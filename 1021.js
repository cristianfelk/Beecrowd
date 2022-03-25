let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
 const cedulas = [100, 50, 20, 10, 5, 2]
 const modedas = [1.00,0.50, 0.25, 0.10, 0.05, 0.01]
console.log('NOTAS:')
for (let i = 0; i < cedulas.length; i++){
    let notas = N / cedulas[i]
    N = N % cedulas[i]
    console.log(`${parseInt(notas)} nota(s) de R$ ${cedulas[i]}.00`)
}
    console.log('MOEDAS:')
for (let i = 0; i < modedas.length; i++){
    let notas = N / modedas[i]
    N = N % modedas [i] + 0.00001
    console.log(`${parseInt(notas)} moeda(s) de R$ ${modedas[i].toFixed(2)}`)
}