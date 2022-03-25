let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
for (let x = 1; x < valor; x++){

    if (x < valor - 1){
    valores += 'Ho '
    } else {
        valores += 'Ho'
    }
}

console.log(valores + '!')