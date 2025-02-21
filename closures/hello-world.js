/**
 * @return {Function}
 */
const createHelloWorld = (...args) => {
  return () => {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f()); // "Hello World"
