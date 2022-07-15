# Multiplayer Pong Game

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



