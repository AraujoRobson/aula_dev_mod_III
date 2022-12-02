let limpar_quarto = new Promise((resolve, reject) => {
  resolve('Limpei o quarto! \n')
})

let retirar_lixo = function(mensagem){
  return new Promise((resolve, reject) => {
    resolve(mensagem + '\t-> retirei o lixo! \n')
  })
}

let ganharSorvete = function(mensagem){
  return new Promise((resolve, reject) => {
    resolve(mensagem + '\t\t-> ganhei sorvete! \n')
  })
}

// limpar_quarto.then(resultado => {
//   return retirar_lixo(resultado)
// }).then(resultado => {
//   return ganharSorvete(resultado)
// }).then(resultado => {
//   console.log(resultado + '\t\t\t-> Fim!');
// })

// Promise.all([limpar_quarto, retirar_lixo(), ganharSorvete()]).then(() =>{
//   console.log('Todas as tarefas foram finalizadas!');
// })

Promise.any([limpar_quarto, retirar_lixo(''), ganharSorvete('')])
  .then(tarefa => console.log(`Tarefa ${tarefa} concluida!`))
