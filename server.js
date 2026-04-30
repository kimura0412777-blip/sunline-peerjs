const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;

const server = PeerServer({
  port,
  path: "/",
  allow_discovery: true,
  proxied: true,
});

server.on("connection", (client) => {
  console.log("Connected:", client.getId());
});

server.on("disconnect", (client) => {
  console.log("Disconnected:", client.getId());
});

console.log("PeerJS server running on port " + port);
