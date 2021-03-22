const express = require('express')
const mysql = require('mysql')
const router = express.Router()

router.get('/', (request, response) =>{
    response.render('index')
})

router.post('/add_todo')