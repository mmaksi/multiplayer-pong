const http = require("http");
const sockets = require("./sockets");
const io = require("socket.io");

const port = process.env.PORT || 8000;

const apiServer = require("./api");
const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

httpServer.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

sockets.listen(socketServer);