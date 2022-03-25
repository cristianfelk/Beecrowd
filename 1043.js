let input = require("fs").readFileSync("./dev/stdin/file.txt", "utf8");
let lines = input.split("\n");

let entrada = lines.shift().split(" ");
let A = parseFloat(entrada[0]);
let B = parseFloat(entrada[1]);
let C = parseFloat(entrada[2]);
let maior;
let soma;
let triangulo;

if (A > B && A > C) maior = A;
else if (B > C) maior = B;
else maior = C;

if (maior == A) soma = B + C;
else if (maior == B) soma = A + C;
else soma = B + A;

if (soma > maior) triangulo = true;
else triangulo = false;

if (triangulo) {
  let perimetro = A + B + C;
  console.log("Perimetro = " + perimetro.toFixed(1));
} else {
  let areaT = ((A + B) * C) / 2;
  console.log("Area = " + areaT.toFixed(1));
}
