const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const porta = 8080;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

let valor1, valor2, operacao;

app.get('/processa-calc', function(req, res) {
  valor1 = parseInt(req.query['fValor1']);
  valor2 = parseInt(req.query['fValor2']);
  operacao = parseInt(req.query['fOperacao']);

  console.log(valor1, valor2, operacao);

  processaRequisicao(res);
});

app.listen(porta,
  () => console.log(`Servidor iniciado: ${porta}`)
  )

function processaRequisicao(res){
  let resultado = 0;
  switch(operacao){
    case 1:
      resultado = valor1 + valor2;
      break;
    case 2:
      resultado = valor1 - valor2;
      break;
    case 3:
      resultado = valor1 * valor2;
      break;
    case 4:
      resultado = valor1 / valor2;
      break;
  }
  res.send(''+ resultado);
}
