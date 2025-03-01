/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(millis), millis);
  });
}

/**
 * Using await
 */
async function sleepAwait(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
sleepAwait(100).then(() => console.log(Date.now() - t)); // 100
