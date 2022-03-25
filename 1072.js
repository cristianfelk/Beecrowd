let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let entrada = +lines.shift()
let dentro = 0
let fora = 0
let array = []

for (let i = 0; i < entrada; i ++) {
    array[i] = +lines.shift()
    if (array[i] >= 10 && array[i] <= 20) {
        dentro ++
    }
    else {
        fora ++
    }
}
console.log(`${dentro} in`)
console.log(`${fora} out`)