const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
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