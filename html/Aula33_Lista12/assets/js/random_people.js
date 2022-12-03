const list = document.getElementById('iUsers')
fetch('https://randomuser.me/api?results=5')
  .then(reponse => {
    return reponse
  })
  .then(reponse => reponse.json())
  .then(reponse => {
    let users = reponse.results

    for (user of users) {
      let item = document.createElement('li')
      let img = document.createElement('img')
      let span = document.createElement('span')
      let span1 = document.createElement('span')
      let hr = document.createElement('hr')
      img.src = user.picture.medium

      span1.innerHTML = `: ${user.name.title}. ${user.name.first} ${user.name.last}`
      span.appendChild(img)
      list.appendChild(item)
      item.appendChild(span)
      item.appendChild(span1)
      item.appendChild(hr)
    }
  })
  .catch(err => console.log(`Error... ${err}`))
  .finally(() => console.log('Finally Request'))
