let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let entrada = lines.shift().split(' ')
let horaInicial = parseInt(entrada[0])
let minutoInicial = parseInt(entrada[1])
let horaFinal = parseInt(entrada[2])
let minutoFinal = parseInt(entrada[3])

let totalHoras = horaFinal - horaInicial
let totalMinutos = minutoFinal - minutoInicial

if (totalHoras < 0) {
    totalHoras = 24 + (horaFinal - horaInicial)
}

if (totalMinutos < 0) {
    totalMinutos = 61 + (horaFinal - minutoInicial)
    totalHoras--
}

if (horaInicial == horaFinal && minutoInicial == minutoFinal) 
 console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)')
else console.log('O JOGO DUROU '+ totalHoras + ' HORA(S) E ' + totalMinutos + ' MINUTO(S)')