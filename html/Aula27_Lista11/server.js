const express = require('express')
const app = express()
const port = 8080;

app.use(express.static('public'))

let email, password, msgAlert

app.get('/validated_login', function(req, res){
  email = req.query['fEmail']
  password = req.query['fPassword']

  if(email == 'robson@ammes.com.br' && password == '123abc'){
    msgAlert = 'Login efetuado com sucesso!'
  } else {
    msgAlert = 'Email e/ou senha inexistente!'
  }
  processReq(res)
})

app.listen(port,
  () => console.log(`Start server. Port ${port}`)
)

function processReq(res){
  let mensage = `<h3><div ckass="alert alert-primary">${msgAlert}</div></h3>`;
  HTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet">
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      crossorigin="anonymous">

    <div class="container" style="margin-top: 0.5rem">
      ${mensage}

      <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
        <i class="fas fa-door-open"></i>
        Login
      </button>
    </div>
  `;
  res.send(HTML);
}
