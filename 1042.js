let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let entrada = lines.shift().split(" ").map(a => +a)
let n1 = (entrada[0])
let n2 = (entrada[1])
let n3 = (entrada[2])

let n = entrada.sort((a,b)=> a-b)
for(let i = 0; i < 3; i++){
    console.log(n[i])
}
console.log(``)
console.log(n1)
console.log(n2)
console.log(n3)