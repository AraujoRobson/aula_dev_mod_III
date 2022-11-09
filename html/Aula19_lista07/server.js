const { request, response } = require('express');
const express = require('express');

const app = express();
const port = 8080;

app.listen(port,
  () => console.log(`Servidor iniciado na porta: ${port}`)
);

app.get('/', (request, response) => {
  response.status(200).send('<h2>Exemplo de servidor node.js<h2>');
});

function sleep(ms){
  return new Promise(
    (resolve) => setTimeout(resolve, ms)
  );
}

app.get('/reverse', function(req, res){
  let value = req.query['fValue'];

  sleep(500).then(() =>{
    processReq(res, value);
  });
});

app.post('/reverse', (req, res) =>{
  let value = req.body.fValue;

  processReq(res, value);
});

function processReq(res, value){
  let msgAlert = 'O reverso é: ';
  let result = 'Não foi digitado nada para reverter...'

  result = value.split('').reverse().join('');


  msgAlert += result;

  let mensagem = `<h3><div ckass="alert alert-primary">${msgAlert}</div></h3>`;
  HTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
      rel="stylesheet">
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      crossorigin="anonymous">

    <div class="container" style="margin-top: 0.5rem">
      ${mensagem}

      <button type="button" onclick="window.history.back()" class="btn btn-outline-danger">
        <i class="fas fa-door-open"></i>
        Voltar
      </button>
       

    </div>
  `;
  res.send(HTML);
}
