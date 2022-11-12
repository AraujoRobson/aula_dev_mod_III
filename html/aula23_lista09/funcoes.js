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
