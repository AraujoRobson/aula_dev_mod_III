// function somar(a = 0, b = 0){
//   return a+b;
// }

// console.log(somar(40,2));
// console.log(somar(42));
// console.log(somar());
// console.log(somar(undefined, 50));


const saudacao = (pessoa = 'Fulano', saudacao = "Olá") => {
  return saudacao + ' ' + pessoa;
}

console.log(saudacao());
