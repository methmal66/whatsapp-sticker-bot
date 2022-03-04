import express from 'express'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 8000
const urlEncodedParser = bodyParser.urlencoded({ extended: false })
const app = express()

app.get('/api/sticker/text', urlEncodedParser, (req, res) => {
   return res.json({
      text: req.query.text,
      fontColor: req.query.fontColor,
      backgroundColor: req.query.backgroundColor,
   })
})

app.listen(PORT, () => {
   console.log(`Server is listening at localhost:${PORT}`)
})
