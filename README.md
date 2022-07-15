# Multiplayer Pong Game
This Multiplayer Pong Game allows each two users to play together in a single room. The front-end is made ready by a public community and I implemented the backend server to make it a multiplayer game with rooms and a single namespace using the power of Socket.io and Express.js.
<p align="center">
    <img src="https://i.ibb.co/2qxxZmS/pong.png" />
</p>

## Polling

- Polling is making a request every set amount of time. We make polling when we deal with data we don't know how to deal with; data that has its own lifecycle.
- Polling makes it very expensive on the resources and it's not a practical way to solve real-life problems.

## What is a Socket?

a socket is an opening or hollow that forms a holder for something (data).

## Sockets vs Polling

- In sockets, communication is bi-directional.
- Sockets allow real-time communication and transfer of data between the client and the server.
- The communication between the client and the server occurs through events: `emit ("messages", "hello server!")`

## WebSockets

WebSocket is a differnt protocol than HTTP, and just like HTTP has axios libraries to make requests, WebSocket procol has the popular Socket.io library that provides the socket connection and it has the same API for both the front-end and the back-end.

## Multiplayer Pong Message Sequence

1. Each client emits `ready` event when the browser finishes drawing the canvas and connecting to the `/pong` namespace.
2. The server listens to the `ready` event and pushes the `socket.id` of the last connected client as the referee to all ready players. When the ready clients in a single room are equal to 2, game starts.
3. The referee emits the `paddleMove` event including the `xPosition` to the server.
4. The server listens to the `paddleMove` event and pushes the `paddleData` to all connected clients on the same room except the sender.
5. The referee emits the `ballMove` event including the `xPosition` to the server.
6. The server listens to the `ballMove` event and pushes the `ballMove` to all connected clients on the same room except the sender.
   ![multiplayer-pong](https://i.ibb.co/mRM6pVP/game-sequence.png)

## Socket.io Cheetsheet
```
io.on("connection", (socket) => {
  // basic emit
  socket.emit(/* ... */);

  // to all clients in the current namespace except the sender
  socket.broadcast.emit(/* ... */);

  // to all clients in room1 except the sender
  socket.to("room1").emit(/* ... */);

  // to all clients in room1
  io.in("room1").emit(/* ... */);

  // to all clients in namespace "myNamespace"
  io.of("myNamespace").emit(/* ... */);

  // to all clients in room1 in namespace "myNamespace"
  io.of("myNamespace").to("room1").emit(/* ... */);

  // to individual socketid (private message)
  io.to(socketId).emit(/* ... */);

  // to all connected clients
  io.emit(/* ... */);

  // WARNING: `socket.to(socket.id).emit()` will NOT work, as it will send to everyone in the room
  // named `socket.id` but the sender. Please use the classic `socket.emit()` instead.
});
```