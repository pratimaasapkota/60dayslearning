//Error handeling in promises
const riskyOperation = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("Success") : reject("Failure");
    }, 1000);
  });
};

riskyOperation()
  .then(console.log)
  .catch(error => {
    console.error("Caught error:", error);
  });
Promise.all([
  Promise.resolve("First"),
  new Promise(res => setTimeout(() => res("Second"), 1000)),
  Promise.resolve("Third")
]).then(console.log);
 