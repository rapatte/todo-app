const express = require('express');
const ejs = require('ejs');
const router = require('./routers/index')
//then we call express
const app = express();

app.engine('ejs', ejs.renderFile);
app.set("views", "./src/views");
//takes us to the root(/) URL
app.use(router);
//the server is listening on port 8080 for connections
app.listen(8080, () => {
  console.log('App listening on port 8080')
});