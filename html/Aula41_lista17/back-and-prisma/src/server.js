const express = require('express')
const cors = require('cors')
const formData = require('express-form-data')

const app = express()
const port = 8081

app.use(cors({origin: '*'}))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(formData.parse())

app.use('/api/users', require('./userRoutes'))

app.get('/', (request, response) => {
  response.status(200).send('Home Page')
})

app.listen(port, () => console.log(`Server started on port: ${port}`))
