const http = require("http");
const sockets = require("./sockets");
const io = require("socket.io");

const PORT = 3000;

const apiServer = require("./api");
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

httpServer.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

sockets.listen(socketServer);
