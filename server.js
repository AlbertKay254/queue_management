import express from 'express';
import next from 'next';
import http from 'http';
import { Server } from 'socket.io'; // Correct ES Module import

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer); // Correct way to initialize socket.io

  io.on('connection', (socket) => {
    console.log('New client connected');
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  httpServer.listen(3010, () => {
    console.log('> Ready on http://localhost:3010');
  });
});
