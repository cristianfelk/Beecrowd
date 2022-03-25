let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

var N = parseInt(lines.shift()); var N2 = N % 3600; var N3 = N2 % 60
var horas = parseInt(N / 3600)
var minutos = parseInt(N2 / 60)
var segundos = parseInt(N3)
console.log(horas + ":" + minutos + ":" + segundos)