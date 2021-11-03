let connection;

const setupInput = function (conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    // Move up with w
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 's') {
      connection.write('Move: down');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }

    
    // Escape out of game with Ctrl + C (close stdin connection)
    if (key === '\u0003') {
      process.exit();
    }
  };  

  // Event listener for keyboard input
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput };