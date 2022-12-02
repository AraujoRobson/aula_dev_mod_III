let promessa_limpar_quarto = new Promise((resolve, reject) => {
  let limpo = true

  if (limpo){
    resolve('está limpo!')
  } else {
    reject('não está limpo!')
  }
})

promessa_limpar_quarto.then(function(resultado){
  console.log(`o quarto ${resultado}`)
}).catch(function(resultado){
  console.log(`o quarto ${resultado}`);
})
