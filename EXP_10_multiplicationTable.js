const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Enter a number: ', (num) => {
num = parseInt(num);
if (isNaN(num)) {
console.log('Please enter a valid number.');
} else {
console.log(`Multiplication Table for ${num}:`);
for (let i = 1; i <= 10; i++) {
console.log(`${num} x ${i} = ${num * i}`);
}
}
rl.close();
});