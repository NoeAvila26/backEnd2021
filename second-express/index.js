// const express = require('express')
// const server = express()


// server.get('/hola', (request, response) => {
//   response.write ('GET /Hola')
//   response.end()
// })

// server.post('/hola', (request, response) =>{
//   response.write('Este es un post a /hola')
//   response.end()
// })

// server.listen(8080, () => {
//   console.log('server listening in port 8080')
// })

// const express = require('express')
// const server = express()


// server.get('/koders', (request, response) => {
//   response.write ('Aqui estan todos los koders')
//   response.end()
// })

// server.post('/koders', (request, response) => {
//   response.write('Aqui puedes crear koders')
//   response.end()
// })

// server.put('/koders', (request, response) => {
//   response.write('Aqui puedes sustituir un koder')
//   response.end()
// })


// server.get('/koders', (request, response ) => {

  //response.setHeader('Conten-Type', 'application/json') esto se sustituyo por el siguiente parrafo menos codigo por que ya no se hace a mano
  //const json = { message: 'Aqui la lista de koders' }
  //const jsonString = JSON.stringify(json)

  //response.write(jsonString)
  //response.end()

//   response.status(501)
//   response.json({ message: 'Aqui estan los koders'})

// })

//Middleware
// server.use(express.json())

// server.post('/koders', (request, response) => {
//   const cuerpo = request.body
//   console.log('body:',body)
//   response.json({
//     message:'ok'
//   })
// })

// server.listen(8080, () => {
//   console.log('server listening in port 8080')
// })




//crear un proyecto -> regresar un json con una lista de koders
//crear un archivo json 
//es un objeto con una key koders que dentro tiene un arreglo
const express = require('express')
const server = express()
server.use(express.json())
const fs = require('fs')


server.get('/koders', (request, response) => {
    const kodersData = fs.readFileSync('koders.json', 'utf8')
    const jsonData = JSON.parse(kodersData)

    response.json({
      success:true,
      message: 'koders API',
      data: jsonData.koders
    })
  })
  
  server.listen(8080, () => {
    console.log('server listening in port 8080')
  })
  