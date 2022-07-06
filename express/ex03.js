const express = require('express')
const server = express()

server.use('/api', function(req,res,next){
    console.log('inicio')
    next()
    console.log('fim')
})
server.use('/api', function(req,res,next){
    console.log('resposta')
    res.send('<h1>Api</h1>')
})

server.listen(3000, ()=> console.log('executando'))