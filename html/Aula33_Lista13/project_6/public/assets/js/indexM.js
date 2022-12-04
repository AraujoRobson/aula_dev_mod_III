const form = document.getElementById('iForm')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const form_data = new FormData(form)
  console.log('Form: ', form_data);

  // Using the spread (...) operator, to expand the array
  console.table([...form_data])

  // Turning an Interator into an Array
  console.log('Keys: ', Array.from(form_data.keys()))
  console.log('Values: ', Array.from(form_data.values()))
  console.log('Entries: ', Array.from(form_data.entries()))

  console.log(`${form_data.get('fUser')}: ${form_data.get('fPassword')}`)

  fetch('http://localhost:8081/postM', {
    method: 'POST',
    body: form_data,
  })
    .then(res => {
      if (!res.ok){
        console.log('Page not found!')
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      console.log(`User: ${data.fUser}`)
    })
    .catch(() => console.log('Error!'))
})
