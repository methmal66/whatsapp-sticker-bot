import express from 'express'
import bodyParser from 'body-parser'
import Subscriber from './db'

const PORT = process.env.PORT || 8000
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const app = express()

app.set('view engine', 'ejs')

app.get('/subscribe', (req, res) => {
   res.status(200).render('subscribe')
})

app.post('/api/subscribe', urlEncodedParser, (req, res) => {
   const doc = new Subscriber({
      email: req.body.email,
      frequency: req.body.frequency,
   })
   doc.save((error) => {
      if (error) return res.status(500).send(error)
      res.status(200).send('New subscriber stored successfully!')
   })
})

app.listen(PORT, () => {
   console.log(`Server is listening at localhost:${PORT}`)
})
