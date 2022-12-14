export function readURL(input){
  if(input.files && input.files[0]){
    const reader = new FileReader()

    reader.onload = function(e){
      const img = document.querySelector('#result-img')
      img.setAttribute('src', e.target.result)
    }
    reader.readAsDataURL(input.files[0])
  }
}
