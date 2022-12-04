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
  console.log('User: ', req.body.fUser)

  req.body.fUser = req.body.fUser.toUpperCase()

  if(req.body.fUser === ''){
    res.status(404).send({})
  } else {
    res.status(200).send(req.body)
  }
})
