let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let entrada = lines.shift().split(" ")
let A = parseInt(entrada[0])
let B = parseInt(entrada[1])

if (A % B == 0 || B % A == 0) 
    console.log('Sao Multiplos')
else 
    console.log('Nao sao Multiplos')