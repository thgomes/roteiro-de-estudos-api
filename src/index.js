const express = require('express')
const subjects = require('./database/subjects/index')

const server = express()

server.get('/subjects/:subject', (req, res) => {
  const { subject } = req.params

  res.json(subjects[subject])
})

server.listen(3000)