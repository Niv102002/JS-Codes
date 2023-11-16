const number = process.argv[2];

if (isNaN(number)) {
    console.log('Invalid input. Please enter a valid number.');
} else {
    console.log(`Table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}