let id, formName, formEmail
const URL = 'http://localhost:8081/api/users/'

window.onload = async function(e){
  const query = window.location.search
  const params = new URLSearchParams(query)
  id = params.get('id')

  formName = document.querySelector('#iName')
  formEmail = document.querySelector('#iEmail')

  const user = await searchUser(id)
  fillOutForm(user)
}

function fillOutForm(user){
  formName.value = user.name
  formEmail.value = user.email
}

async function searchUser(id) {
  return await axios.get(URL + id).data
}

async function updateUser() {
  const name = formName.value
  const email = formEmail.value

  axios.put(URL + id, { name, email })
    .then(res => {
      alert(res.data.message)
      console.log(res.data.user)
      setTimeout(() => window.location.href = '/front-end', 100)
    })
    .catch(res => console.log(res.response.data))
}
