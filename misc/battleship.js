const readline = require("readline");

// playerState class
//  - ship count
//  - map [ [a1, b1, c1], [a2, b2, c2]]
class PlayerState {
  constructor() {
    this.map = [];
    this.shipCount = 0;
  }

  increaseShipCount() {
    this.shipCount++;
  }

  processReceivedAttack(x, y) {
    if (this.map[y].charAt(x) === "#") {
      this.shipCount--;
      this.map[y] =
        this.map[y].substring(0, x) + "_" + this.map[y].substring(x + 1);
      return true;
    }
    return false;
  }
}

// read input
const readInput = () => {
  return new Promise((resolve) => {
    const inputLines = [];
    const r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    r1.on("line", (line) => {
      inputLines.push(line);
    });

    r1.on("close", () => {
      resolve(inputLines);
    });
  });
};

// execute moves
const executeMoves = (player1Moves, player2Moves, player1, player2) => {
  let player1Turn = true;
  for (let i = 0, j = 0; i < player1Moves.length && j < player2Moves.length; ) {
    while (player1Turn) {
      const hit = player2.processReceivedAttack(
        player1Moves[i][0],
        player1Moves[i][1],
      );
      i++;
      if (!hit) player1Turn = !player1Turn;

      // if game end condition reached, give other player equal number of turns
      if (player2.shipCount <= 0) {
        while (j < i && j < player2Moves.length) {
          player1.processReceivedAttack(player2Moves[j][0], player2Moves[j][1]);
          j++;
        }
        if (player1.shipCount <= 0) {
          console.log("draw");
        } else {
          console.log("player one wins");
        }
        return;
      }
    }

    while (!player1Turn) {
      const hit = player1.processReceivedAttack(
        player2Moves[j][0],
        player2Moves[j][1],
      );
      j++;
      if (!hit) player1Turn = !player1Turn;

      // if game end condition reached, give other player equal number of turns
      if (player1.shipCount <= 0) {
        while (i < j && i < player1Moves.length) {
          player2.processReceivedAttack(player1Moves[i][0], player1Moves[i][1]);
          i++;
        }
        if (player2.shipCount <= 0) {
          console.log("draw");
        } else {
          console.log("player two wins");
        }
        return;
      }
    }
  }
};

// process input
//  - players state objects
//  - moves array
const main = async () => {
  const inputLines = await readInput();
  let testCaseNum = 1;
  const testCases = [];
  let startingLineNumber = 1;

  while (testCaseNum <= parseInt(inputLines[0])) {
    const player1 = new PlayerState();
    const player2 = new PlayerState();
    const [w, h, n] = inputLines[startingLineNumber].split(" ").map(Number);
    let currLineNumber = startingLineNumber + 1;

    // map player 1
    for (; currLineNumber < startingLineNumber + h + 1; currLineNumber++) {
      // count ships player 1
      for (let i = 0; i < w; i++) {
        if (inputLines[currLineNumber].charAt(i) === "#") {
          player1.increaseShipCount();
        }
      }
      player1.map.push(inputLines[currLineNumber]);
    }

    // map player 2
    for (; currLineNumber < startingLineNumber + 1 + 2 * h; currLineNumber++) {
      // count ships player 2
      for (let i = 0; i < w; i++) {
        if (inputLines[currLineNumber].charAt(i) === "#") {
          player2.increaseShipCount();
        }
      }
      player2.map.push(inputLines[currLineNumber]);
    }

    // moves: pre-process
    let player1Turn = true;
    const player1Moves = [];
    const player2Moves = [];
    for (
      ;
      currLineNumber < startingLineNumber + (2 * h + n + 1);
      currLineNumber++
    ) {
      const xy = inputLines[currLineNumber].split(" ").map(Number);
      if (player1Turn) {
        player1Moves.push(xy);
        player1Turn = !player1Turn;
      } else {
        player2Moves.push(xy);
        player1Turn = !player1Turn;
      }
    }

    // moves execute
    executeMoves(player1Moves, player2Moves, player1, player2);

    if (player1.shipCount !== 0 && player2.shipCount !== 0) {
      console.log("draw");
    }

    // shift starting line number for next test case
    startingLineNumber = startingLineNumber + (2 * h + n + 1);
    testCaseNum++;
  }
};

main();
