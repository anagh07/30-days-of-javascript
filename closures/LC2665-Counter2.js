/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let count = init;
  return {

    reset: () => {
      count = init;
      return count;
    },

    increment: () => ++count,

    decrement: () => --count
  }
}

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4


class Counter {
  #init;
  #count;

  constructor(init) {
    this.#init = init;
    this.#count = init;
  }

  reset() {
    this.#count = this.#init;
    return this.#count;
  }

  increment() {
    return ++this.#count;
  }

  decrement() {
    return --this.#count;
  }
}

const classCounter = new Counter(5);
console.log("\nClass Based Counter")
console.log(classCounter.increment()) // 6
console.log(classCounter.decrement()) // 5
console.log(classCounter.decrement()) // 4
console.log(classCounter.decrement()) // 3
console.log(classCounter.reset())     // 5