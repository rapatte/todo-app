const path = require('path')
const express = require('express')
const layout = require('express-layout')

const routes = require('./routes')
const app = express()

const bodyParser = require('body-parser')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  express.static(path.join(__dirname, 'files')),
  express.urlencoded({extended: false})
]
app.use(middlewares)

app.use('/', routes)

app.listen(8080, () => {
  console.log(`App running at http://localhost:8080`)
})
