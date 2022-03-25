let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8') 
let lines = input.split('\n')

let pegarValores = (line) => line.split(" ").map(a => Number(a));
let [A, B, C] = pegarValores(lines.shift());

    while (A > 0) {
        console.log (Math.floor (Math.sqrt ((A * B * 100) / C)));
        [A, B, C] = pegarValores(lines.shift());
}
