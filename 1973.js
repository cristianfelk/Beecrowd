let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let quant = +lines.shift()
let valores = lines.shift().split(' ')
let count = 0
let totalEstrelas = 0
let totalCarneiros = 0
valores = valores.map(a => +a)

while (count >= 0 && count < quant) {
    if(valores[count] == 0){
        count--

} else if (valores[count] % 2 == 0) {
    valores[count]--

    if (count + 1 > totalEstrelas) {
    totalEstrelas++
        }

        count--
} else if (valores[count] % 2 == 1) {
        valores[count]--
        
    if (count + 1 > totalEstrelas) {
    totalEstrelas++
    }
    count++
    }          
}
totalCarneiros = valores.reduce((a, b) => a + b)
console.log(totalEstrelas, totalCarneiros)