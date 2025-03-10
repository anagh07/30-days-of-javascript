/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  const results = [];
  let resolvedCount = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((result) => {
          results[i] = result;
          resolvedCount++;
          // resolve this promise when all function execution done
          if (resolvedCount === functions.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

const promise = promiseAll([() => new Promise((res) => res(42))]);
promise.then(console.log); // [42]
