//callback and callback held 
function getData(callback) {
  setTimeout(() => {
    console.log("Data received");
    callback();
  }, 1000);
}

getData(() => {
  console.log("Callback executed");
});
setTimeout(() => {
  console.log("Task 1");
  setTimeout(() => {
    console.log("Task 2");
    setTimeout(() => {
      console.log("Task 3");
    }, 1000);
  }, 1000);
}, 1000);
//promises
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

getData().then(data => {
  console.log(data);
});
//promise chainning
const fetchData = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1"), 1000);
  });
};

fetchData()
  .then(result => {
    console.log(result);
    return "Step 2";
  })
  .then(step => {
    console.log(step);
    return "Step 3";
  })
  .then(console.log);

 