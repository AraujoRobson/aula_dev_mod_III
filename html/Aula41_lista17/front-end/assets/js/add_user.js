let formName, formEmail
const URL = 'http://localhost:8081/api/users'

window.onload = function(e){
  formName = document.querySelector('#iName')
  formEmail = document.querySelector('#iEmail')
}

async function addUser(){
  const name = formName.value
  const email = formEmail.value

  axios.post(URL, { name, email })
    .then(res => {
      alert(res.data.message)
      console.log(res.data.user);
      setTimeout(() => window.location.href = '/front-end', 100);
    })
    .catch(res => console.log(res,response.data))
}
