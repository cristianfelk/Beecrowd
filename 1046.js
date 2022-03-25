let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

var entrada = lines.shift().split(" ")
var horaI = parseInt(entrada[0])
var horaF = parseInt(entrada[1])

if (horaI > horaF) { 
    console.log('O JOGO DUROU ' + (24 - (horaI - horaF)) + ' HORA(S)')
} else if (horaF > horaI) {
    console.log('O JOGO DUROU ' + (horaF - horaI) + ' HORA(S)')
} else {
   console.log('O JOGO DUROU 24 HORA(S)')
}