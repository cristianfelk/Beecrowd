let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let X = lines.shift()
if (X >= 1 && X <= 1000) {
for (let i = 1; i <= X ; i++) {
    if (i%2 !== 0) {
        console.log(`${i}`)

    }

}
}