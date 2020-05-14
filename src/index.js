const express = require('express')
const subjects = require('./database/subjects')
const topics = require('./database/topics')

const server = express()

server.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header("Access-Control-Allow-Headers", "accept, content-type");
  res.header("Access-Control-Max-Age", "1728000");
  res.json({ subjects })
})



server.get('/subjects/:subject', (req, res) => {
  const { subject } = req.params
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header("Access-Control-Allow-Headers", "accept, content-type");
  res.header("Access-Control-Max-Age", "1728000");
  res.json(topics[subject])
})

server.listen(3333)
