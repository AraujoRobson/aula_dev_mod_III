const UL = document.getElementById('iUsers')
const URL = 'https://jsonplaceholder.typicode.com/users'

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    return data.map((user)=> {
      let li = document.createElement('li')
      li.innerHTML = `${user.name} (${user.username})`
      UL.appendChild(li);
    })
  })
  .catch((err) => {
    console.log(`Err: ${err}`);
  })
