// // ES5
// const criarAdicao = function(base){
//   return function(numero){
//     return base + numero;
//   }
// }

// const somador = criarAdicao(41);
// console.log(somador(1));
// console.log(somador(2));
// console.log(somador(10));


// ES6 com arrow function

const adicionar = (base, numero) => base + numero;
const criarAdicaoAF = base => numero => adicionar(base, numero);
const somadorAF = criarAdicaoAF(41);

console.log(somadorAF(1));
console.log(somadorAF(2));
