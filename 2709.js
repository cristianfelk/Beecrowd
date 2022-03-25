let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let quantMoedas = lines.shift()
let total = 0
let valor = []
let nSalto = 0
let count = 0
let countT = 0

while (lines.length) {

 for (let i = 0; i < quantMoedas; i++) {
    valor.push(lines.shift())
}
 nSalto = +lines.shift()
 for (let i = 0; i < quantMoedas; i++) {
    count++
    countT++
 }
    if ((count === nSalto) && (countT <= quantMoedas)) {
        total += valor[quantMoedas - countT]
        count = 0
 }

    const nprimo = (total) => {
        for (let i = 2; i < total; i++)
         if (total % i === 0) {
          return false;
        }
        return total > 1;
        }
    if (nprimo(total) === true)
     console.log(`You’re a coastal aircraft, Robbie, a large silver aircraft.`)
     else (console.log(`Bad boy! I’ll hit you.`))
    if (lines.shift() === ' ') {
 }
}