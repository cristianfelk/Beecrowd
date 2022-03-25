let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

var x = parseInt(lines.shift())
var cont = 0
while (cont < 6) {
    if (x % 2 == 1) {
        console.log(x)
        cont++;
    }
    x++
}