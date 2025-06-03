const { add, subtract } = require('./math-common.cjs');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

console.log("🟩 CommonJS Module Output");
console.log(`Numbers: ${data.num1}, ${data.num2}`);
console.log(`Addition: ${add(data.num1, data.num2)}`);
console.log(`Subtraction: ${subtract(data.num1, data.num2)}`);
