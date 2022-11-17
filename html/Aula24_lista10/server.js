const express = require('express')
const cors = require('cors')

const app = express();
const port = 8080;

// CONFIG CORS
app.use(cors({origin: '*'}));

app.listen(port,
  () => console.log(`Servidor iniciado na porta: ${port}`)
);

app.get('/return-json', function(req, res){
  const name = req.query['name']
  const address = req.query['address']
  const uf = req.query['uf']
  const city = req.query['city']
  const person = {
    Nome: name,
    Endereço: address,
    UF: uf,
    Cidade: city
  }
  res.status(201).json(person)
})
