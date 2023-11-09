//import json-server library in index.js file
const jsonServer = require('json-server')

//create json-server
const mediaPlayerServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware to convert json to js
const middleware = jsonServer.defaults()

//use middleware and router in the server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port running server
const port = 5000 || process.env.PORT

//to listen server for resolving request from client
mediaPlayerServer.listen(port,()=>{
    console.log(`mediaplayerserver started at ${port} and waiting for the request`);
})

