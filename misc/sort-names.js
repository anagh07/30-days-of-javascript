/**
# Approach
Use javascript's array.sort method with a custom comparator method which compares last names when unique, and uses first name when common last name. Use a map to identify entries that have common first names; use the map to format and print output.

## Time complexity
array.sort = O(n * log n)
string.split = O(m) where m is length of string
time complexity = O(m * n * log n)

## Space complexity
map to store ambiguity flags = O(n)
*/

const readline = require("readline");

// process input
const processInput = () => {
  // read input that is terminated by EOF
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

// idetify ambiguous first names
const identifyAmbiguousFirstNames = (names, map) => {
  for (let name of names) {
    let fName = name.split(" ")[0];
    if (!map.has(fName)) {
      map.set(fName, false);
    } else {
      map.set(fName, true);
    }
  }
  return map;
};

// sort names
const sortNames = (names) => {
  names.sort((a, b) => {
    const [aFName, aLName] = a.toLowerCase().split(" ");
    const [bFName, bLName] = b.toLowerCase().split(" ");

    // when last name is same: compare by first name
    if (aLName === bLName) {
      if (aFName < bFName) {
        return -1;
      } else {
        return 1;
      }
    }

    // when last name is different: compare by last name
    if (aLName < bLName) {
      return -1;
    } else {
      return 1;
    }
  });
};

// print output using unambiguous first names
const printNames = (names, ambiguousFirstNames) => {
  for (let name of names) {
    const [fName, lName] = name.split(" ");
    if (ambiguousFirstNames.get(fName)) {
      console.log(`${fName} ${lName}`);
    } else {
      console.log(fName);
    }
  }
};

const main = async () => {
  const ambiguousFirstNames = new Map();
  // input
  const names = await processInput();

  // idintify names with ambiguous first names
  identifyAmbiguousFirstNames(names, ambiguousFirstNames);
  console.log(ambiguousFirstNames);

  // sort
  sortNames(names);
  console.log(names);

  printNames(names, ambiguousFirstNames);
};

main();
