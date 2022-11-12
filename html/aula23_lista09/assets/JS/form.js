const form = document.querySelector('#form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const inputName = e.target.querySelector('#iName')
  const inputAddress = e.target.querySelector('#iAddress')
  const inputEmail = e.target.querySelector('#iEmail')
  const inputBirth = e.target.querySelector('#iBirth')
  const inputSalary = e.target.querySelector('#iSalary')
  const inputPassword = e.target.querySelector('#iPassword')
  const inputConfirmedPassword = e.target.querySelector('#iConfirmedPassword')

  const name = inputName.value
  const address = inputAddress.value
  const email = inputEmail.value
  const password = inputPassword.value
  const confirmedPassword = inputConfirmedPassword.value

  let birth = new Date(inputBirth.value)
  const day = padTo2Digits(birth.getDay())
  const month = padTo2Digits(birth.getMonth())
  const year = padTo2Digits(birth.getFullYear())
  birth = `${day}/${month}/${year}`

  const salary = `R$ ${Number(inputSalary.value)}`

  const person = {
    name, address, email, birth, salary
  }

  if(!validate_password(password, confirmedPassword)){
    alert('As senhas precisam ser iguais!!')
  } else {
    alert('Dados Salvos!')
    console.table(person)
  }

})

// funcao para colocar 0 nas datas para ficar 08/09/2022
let padTo2Digits = number => number.toString().padStart(2, '0')

let validate_password = (password, confirmedPassword) => (password == confirmedPassword) ? true : false
