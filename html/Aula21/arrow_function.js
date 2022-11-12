// Função nomeada
function quadrado(numero){
  return numero * numero
}
console.log(quadrado(5));

// Função anônima
let quadrado1 = function(numero){
  return numero * numero
}
console.log(quadrado1(5));

// Função com flecha
let quadrado2 = (numero) => {
  return numero * numero;
}
console.log(quadrado2(5));

// Função com flecha MAIS SIMPLES
let quadrado3 = numero =>{
  return numero * numero
}
console.log(quadrado3(5));

// Função com flecha return IMPLÍCITO
let quadrado4 = numero => numero * numero
console.log(quadrado4(5))
