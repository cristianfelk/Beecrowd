let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a);  
let [a, b, c] = pegarValores(lines.shift())

if ((2 * a) === 0 ){
    console.log("Impossivel calcular")
}else{
    const  formBas = ((b * b) - (4 * a * c))

    if (formBas > - 1 ) {

        let R1 = (- b + Math.sqrt(formBas)) / (2*a)
        let R2 = (- b - Math.sqrt(formBas)) / (2*a)

        console.log("R1 = " + R1.toFixed(5))
        console.log("R2 = " + R2.toFixed(5))
    } else {
        console.log("Impossivel calcular")
    }
}