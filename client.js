const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a TCP connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data and print it out for the player
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // As soon as connection is successfully established
  conn.on('connect',() => {
    console.log('Successfully connected to game server');
    conn.write('Name: Tim');
    // setTimeout(() => {conn.write('Move: up');}, 10);
    // setInterval(() => {conn.write('Move: up');}, 30);
  });

  return conn;
};

module.exports = { connect };