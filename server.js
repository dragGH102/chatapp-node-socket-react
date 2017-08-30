const express = require('express')();
const server = require('http').Server(express);
const io = require('socket.io')(server);
const next = require('next');

const args = require('optimist').argv;
const port = args.p || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();


// socket.io
io.on('connection', (socket) => {
    // user connected
    console.log('connected');

    // send to the other clients
    socket.broadcast.emit('connected');

    socket.on('disconnect', () => {
        console.log('disconnected');
        socket.broadcast.emit('disconnected');
    });
});

nextApp.prepare()
  .then(() => {
    // express server set up
    express.get('*', (req, res) => {
      return handle(req, res)
    });

    express.get('/', (req, res) => {
      res.end();
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });