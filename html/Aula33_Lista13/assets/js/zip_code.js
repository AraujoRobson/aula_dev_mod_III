function consult(){
  const ZIP_CODE = document.querySelector('#iZip_code').value //'20973012'
  const URL = `https://viacep.com.br/ws/${ZIP_CODE}/json/`

  const OPTIONS = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=utf-8'
    }
  }


  fetch(URL, OPTIONS)
    .then(response => response.json())
    .then(data => {
      show_result(true, data);
    })
    .catch(err => show_result(false, err))
}

function show_result(status, data){
  let result = document.querySelector('#iResult')
  if (status){
    if (data.err){
      result.innerHTML = 'Não foi possivel localizar endereço!'
    } else {
      result.innerHTML = `<p>Endereço: ${data.logradouro}</p>
                          <p>Complemento: ${data.complemento}</p>
                          <p>Bairro: ${data.bairro}</p>
                          <p>Cidade: ${data.localidade}</p>`
    }
  } else {
    result.innerHTML = `Erro: ${data}`
  }
}
