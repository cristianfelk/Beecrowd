var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
function pares() {
    for (var i = 1; i < 101; i++) {
        if((i % 2) == 0){
         console.log(+ i);
        }
    }
}
pares();