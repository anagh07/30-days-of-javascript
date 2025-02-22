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