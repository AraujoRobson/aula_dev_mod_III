let formName, formEmail, formOp, form
const FRONT = 'http://localhost:5502/front-end/'
const API = 'http://localhost:8081/api/users'

window.onload = function(e){
  formName = document.querySelector('#iName')
  formEmail = document.querySelector('#iEmail')
  form = document.querySelector('#iForm')
  formOp = document.querySelector('#iOp')
  listUser()
}

function createTable(users){
  const tableBody = document.querySelector('#iUsers')
  tableBody.innerHTML = ''

  if(users){
    const lines = users.map(user => {
      const tdId = document.createElement('td')
      tdId.innerHTML = user.id

      const tdName = document.createElement('td')
      tdName.innerHTML = user.name

      const tdEmail = document.createElement('td')
      tdEmail.innerHTML = user.email

      const btnEdit = document.createElement('a')
      btnEdit.innerHTML = 'Edit'
      btnEdit.setAttribute('href', `${FRONT} 'update_user.html?id='${user.id}`)
      btnEdit.classList.add('btn', 'btn-primary', 'me-2')

      const btnDelete = document.createElement('a')
      btnDelete.innerHTML = 'Delete'
      btnDelete.classList.add('btn', 'btn-danger')
      btnDelete.addEventListener('click', function (event){
        if(confirm('Are you sure you want to delete?')){
          axios.delete(`${API}/${user.id}`, {
          }).then(res => {
              alert(res.data.mensage)
              listUser()
            })
        }
      }, false)

      const tdActions = document.createElement('td')
      tdActions.appendChild(btnEdit)
      tdActions.appendChild(btnDelete)

      const tr = document.createElement('tr')
      tr.appendChild(tdId)
      tr.appendChild(tdName)
      tr.appendChild(tdEmail)
      tr.appendChild(tdActions)

      return tr
    })

    lines.forEach(line => tableBody.appendChild(line))
  }
}

async function listUser(){
  const res = await axios.get(API, {
  })
  console.log(res)
  createTable(res.data.users)
}
