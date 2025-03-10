const readline = require("readline");

const countBelowZero = (n, temperatures) => {
  let numberOfNegatives = 0;

  for (let i = 0; i < n; i++) {
    if (temperatures[i] < 0) {
      numberOfNegatives++;
    }
  }

  console.log(numberOfNegatives);
  return numberOfNegatives;
};

const readInput = () => {
  let inputLines = [];
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  r1.on("line", (line) => {
    inputLines.push(line);
    if (inputLines.length === 2) {
      const n = parseInt(inputLines[0]);
      const temperatures = inputLines[1].split(" ").map(Number);
      countBelowZero(n, temperatures);
      r1.close();
    }
  });
};

readInput();
