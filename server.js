const app = require('express'); 
const hostname = '127.0.0.1';
const port = 3000;
const server = require('http').createServer();
const io = require('socket.io')(server);
server.listen(port,hostname, ()=> console.log(`server running on port ${port}: host ${hostname}`));