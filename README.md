# Multiplayer Pong Game
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
