let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let positivos = 0
let entrada = []
for (let i = 0; i < 6 ; i++) {
  entrada[i] = +lines.shift()
   if (entrada[i] > 0) {
       positivos += 1
   }
}
console.log(`${positivos} valores positivos`)