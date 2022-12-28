const express = require('express')
const cors = require('cors')

const app = express()
const port = 8081

app.use(cors({ origin: '*' }))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('./api/users', require('./routes'))

app.get('/', (request, response) => {
  response.status(200).json({ hello: 'Hello World!' })
})

app.listen(port, () => console.log(`Started server on port: ${port}`))
