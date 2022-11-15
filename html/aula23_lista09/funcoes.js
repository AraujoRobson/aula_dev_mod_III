// QUESTÃO 1

function par_ou_impar1(numero){
  if(numero % 2 == 0){
    return 'par'
  }
  return 'impar'
}
console.log('Par ou Impar 1: ', par_ou_impar1(5))

const par_ou_impar2 = numero => {
  if(numero % 2 != 0){
    return 'impar'
  }
  return 'par'
}
console.log('Par ou Impar 2: ', par_ou_impar2(4));

const par_ou_impar3 = numero => (numero % 2 == 0) ? 'par': 'impar'
console.log('Par ou Impar 3: ',par_ou_impar3(43));





// QUESTÃO 4

function multiplicar(x = 0, y = 0){
  return x * y
}
console.log(`Passando os 2 parametros: ${multiplicar(10, 5)}`);
console.log(`Não passando nenhum parametro: ${multiplicar()}`);
console.log(`Passando somente o valor de x: ${multiplicar(10)}`);
console.log(`Passando somente o valor de y: ${multiplicar(undefined, 5)}`);
