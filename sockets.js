let readyPlayersCount = 0;

function listen(io) {
  const pongNamespace = io.of('/pong')
  pongNamespace.on("connection", (socket) => {
    console.log("a user connected with the id", socket.id);

    socket.on("ready", () => {
      readyPlayersCount++;
      console.log(`ready players: ${readyPlayersCount}`);
      if (readyPlayersCount % 2 === 0) {
        pongNamespace.emit("startGame", socket.id);
      }
    });

    socket.on("paddleMove", (paddleData) => {
      socket.broadcast.emit("paddleMove", paddleData);
    });

    socket.on("ballMove", (ballData) => {
      socket.broadcast.emit("ballMove", ballData);
    });

    socket.on("disconnect", (reason) => {
      console.log(`Client ${socket.id} disconnected: ${reason}`);
    });
  });
}

module.exports = {listen}