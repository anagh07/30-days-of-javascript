const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

myPromise.then((result) => console.log(result));
console.log(myPromise);
console.log("sync task");
