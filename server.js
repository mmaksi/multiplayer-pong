const http = require("http");

const PORT = 3000;

const server = http.createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

let readyPlayersCount = 0;

io.on("connection", (socket) => {
  console.log("a user connected with the id", socket.id);

  socket.on("ready", () => {
    readyPlayersCount++;
    console.log(`ready players: ${readyPlayersCount}`);
    if (readyPlayersCount % 2 === 0) {
      io.emit("startGame", socket.id);
    }
  });

  socket.on("paddleMove", (paddleData) => {
    socket.broadcast.emit("paddleMove", paddleData);
  });

  socket.on("ballMove", (ballData) => {
    socket.broadcast.emit("ballMove", ballData);
  });

  socket.on("disconnect", (reason) => {
    console.log(`Client ${socket.id} disconnected: ${reason}`)
  })
});
