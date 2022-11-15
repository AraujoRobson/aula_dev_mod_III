const express = require('express')
const cors = require('cors')

const app = express();
const port = 8080;

// CONFIG CORS
app.use(cors({origin: '*'}));

app.listen(port,
  () => console.log(`Servidor iniciado na porta: ${port}`)
);


function sleep(ms){
  return new Promise(
    (solve) => setTimeout(solve, ms)
  )
}

app.get('/processa-requisicao', function(req, res){
  sleep(3000).then(() => {
    res.status(200).send('<h2>Olá Mundo!</h2>')
  })
})
