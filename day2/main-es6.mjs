import { add, subtract } from './math-es6.js';
import { readFileSync } from 'fs';

const data = JSON.parse(readFileSync('./data.json', 'utf-8'));

console.log("🟦 ES6 Module Output");
console.log(`Numbers: ${data.num1}, ${data.num2}`);
console.log(`Addition: ${add(data.num1, data.num2)}`);
console.log(`Subtraction: ${subtract(data.num1, data.num2)}`);
