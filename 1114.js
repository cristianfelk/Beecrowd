let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let senha = 2002
let entrada = 0

while (entrada !== senha) {entrada = parseInt(lines.shift())

if (entrada === senha) { 
 console.log("Acesso Permitido")
}
else {
 console.log("Senha Invalida")

    }
}