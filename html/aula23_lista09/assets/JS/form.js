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
  const day = padTo2Digits(birth.getDay())
  const month = padTo2Digits(birth.getMonth())
  const year = padTo2Digits(birth.getFullYear())
  birth = `${day}/${month}/${year}`

  const salary = Number(inputSalary.value)

  console.log(`${name}, ${address}, ${email}, ${birth}, ${salary} `)
})

// funcao para colocar 0 nas datas para ficar 08/09/2022
let padTo2Digits = number => number.toString().padStart(2, '0')

