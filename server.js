const { PeerServer } = require("peer");

const port = process.env.PORT || 9000;

const server = PeerServer({
  port: port,
  path: "/peerjs",
  allow_discovery: true,
  alive_timeout: 60000,
  key: "sunline",
});

server.on("connection", (client) => {
  console.log("[CONNECT]", client.getId());
});
server.on("disconnect", (client) => {
  console.log("[DISCONNECT]", client.getId());
});

console.log("✅ PeerJS server running on port " + port + " path /peerjs");
