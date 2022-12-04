const express = require('express')
const cors = require('cors')
const { request, response } = require('express')

const app = express()
const port = 8080

// Configure Cors
app.use(cors({origin: '*'}))

// Configures the handling of POST requests
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Instantiate the server
app.listen(port, () => console.log(`Start server. port: ${port}`))

app.get('/', (request, response) => {
  response.status(200).send('<h2>Node.JS server (:</h2>')
})

// POST request handling
app.post('/postBP', function(req, res){
  console.log('Server: ',req.body)
  console.log('Server: ', req.body.user)

  req.body.user = req.body.user.toUpperCase()

  if(req.body.user === ''){
    res.status(404).send({})
  } else {
    res.status(200).send(req.body)
  }
})
