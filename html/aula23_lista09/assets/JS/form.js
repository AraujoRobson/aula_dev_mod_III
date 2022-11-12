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

  let birth = inputBirth.value
  birth = birth.split('-')
  birth = `${birth[2]}/${birth[1]}/${birth[0]}`
  const salary = `R$ ${Number(inputSalary.value)}`

  const person = {
    name, address, email, birth, salary, password
  }

  if(!validate_password(password, confirmedPassword)){
    alert('As senhas precisam ser iguais!!')
  } else {
    alert('Dados Salvos!')
    console.table(person)
  }

})

let validate_password = (password, confirmedPassword) => (password == confirmedPassword) ? true : false
