const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const client = require('./config/client')

const routes = require('./routes')

app.use(express.json())

app.use('/api', routes)

client.once('open', () => {
  console.log('DB connected')
  app.listen(PORT, () => console.log('Server started on port', PORT))
})