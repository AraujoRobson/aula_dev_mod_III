import { readURL } from "./utils.js"

let form, formPhoto, formPhotoInfo
const URL = 'http://localhost:8081/api/users/'

window.onload = function(e){
  form = document.querySelector('#iForm')
  formPhoto = document.querySelector('#iPhoto')
  formPhotoInfo = document.querySelector('#iPhoto-label')

  formPhoto.addEventListener('change', (e) => {
    readURL(formPhoto)

    const fileName = e.currentTarget.files[0].name
    formPhotoInfo.textContent = 'File: ' + fileName
  })
}

async function add(){
  try {
    const formData = new FormData(form)
    await axios.post(sURL, formData)
  } catch (error){
    console.log(error)
  } finally {
    window.location = 'http://localhost:5502/front-end'
  }
}
window.add = add
