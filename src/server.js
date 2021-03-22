const path = require('path')
const express = require('express')
const layout = require('express-layout')

const routes = require('./routers/index')
const app = express()

const bodyParser = require('body-parser')

app.set("views", path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const middlewares = [
  layout(),
  express.static(path.join(__dirname, 'public')),
  express.urlencoded({extended: false})
]

app.use(middlewares)
app.use('/', routes)

app.listen(8080, () => {
  console.log('App listening on port 8080')
})

// app.engine('ejs', ejs.renderFile);
// const ejs = require('ejs');