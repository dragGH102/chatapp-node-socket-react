const express = require('express');
const next = require('next');
const http = require('http');
const io = require('socket.io')(http);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const args = require('optimist').argv;
const port = args.p || 3000;

app.prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });

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
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });