let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

var dias = parseInt(lines[0])
var meses = 0,
  anos = 0;
  
while (dias >= 365) {
  anos++;
  dias -= 365;
}

while (dias >= 30) {
  meses++;
  dias -= 30;
}

console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`)