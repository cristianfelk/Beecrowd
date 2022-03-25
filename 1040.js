let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
let [n1, n2, n3, n4] = pegarValores(lines.shift())

let media = ((n1*2+n2*3+n3*4+n4*1)/10)

console.log('Media: ' + media.toFixed(1));
if(media >= 7.0){
    console.log("Aluno aprovado.")
}else if(media < 5.0){
    console.log("Aluno reprovado.")
}else{
    console.log("Aluno em exame.")
    const recuperacao = +lines.shift()
    console.log('Nota do exame: ' + recuperacao.toFixed(1))
    media = ((media + recuperacao) / 2)
    if(media >= 5){
        console.log("Aluno aprovado.")
    }else{
        console.log("Aluno reprovado")
    }
    console.log('Media final: ' + media.toFixed(1));
}