import {readURL} from './utils.js'

let id, formName, formEmail, form, formPhoto, formPhotoInfo, formImg
const sURL = 'http://localhost:8081/api/users/'

window.onload = async function(e){
  form = document.querySelector('#iForm')
  formName = document.querySelector('#iName')
  formEmail = document.querySelector('#iEmail')
  formPhoto = document.querySelector('#iPhoto')
  formPhotoInfo = document.querySelector('#iPhoto-label')
  formImg = document.querySelector('#result-img')

  formPhoto.addEventListener('change', (e) =>{
    readURL(formPhoto)

    const input = e.currentTarget
    const fileName = input.file[0].name
    formPhotoInfo.textContent = 'File: ' + fileName
  })

  const user = await searchUser(id)
  fillOutForm(user)
}

function fillOutForm(user){
  formName.value = user.name
  formEmail.value = user.email

  const base64String = new Uint8Array(user.photo.data)
  const blob = new Blob([base64String], { type: 'img.png' })
  formImg.src = URL.createObjectURL(blob)
}

async function searchUser(id) {
  const response = await axios.get(sURL + id)
  return response.data
}

async function updateUser(e) {
  try{
    const formData = new FormData(form)
    const response = await axios.put(sURL + id, formData)
  } catch(error){
    console.log(error);
  } finally {
    window.location = 'http://localhost:5502/front-end'
  }
  return false
}
window.updateUser = updateUser
