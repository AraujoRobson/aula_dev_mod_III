const form = document.querySelector('#form')

form.addEventListener('submit', function(e){
  e.preventDefault();
  const inputName = e.target.querySelector('#iName')
  const inputAddress = e.target.querySelector('#iAddress')
  const inputEmail = e.target.querySelector('#iEmail')
  const inputBirth = e.target.querySelector('#iBirth')
  const inputSalary = e.target.querySelector('#iSalary')

  const name = inputName.value
  const address = inputAddress.value
  const email = inputEmail.value
  let birth = new Date(inputBirth.value)
  birth = `${padTo2Digits(birth.getDay())}/${padTo2Digits(birth.getMonth())}/${padTo2Digits(birth.getFullYear())}`
  const salary = Number(inputSalary.value)

  console.log(`${name}, ${address}, ${email}, ${birth}, ${salary} `)
})

let padTo2Digits = number => {
  return number.toString().padStart(2, '0')
}
