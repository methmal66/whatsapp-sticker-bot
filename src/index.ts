import express from 'express'
import bodyParser from 'body-parser'
import Subscriber from './db'

const app = express()
const urlEncodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', (req, res) => {
   res.status(200).send('Hello World')
})

app.post('/subscribe', urlEncodedParser, (req, res) => {
   const doc = new Subscriber({
      email: req.body.email,
      frequency: req.body.frequency,
   })
   doc.save((error) => {
      if (error) return res.status(500).send(error)
      res.status(200).send('New subscriber stored successfully!')
   })
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
   console.log(`Server is listening at localhost:${PORT}`)
})
