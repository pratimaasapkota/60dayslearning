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
//promise chaining
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
