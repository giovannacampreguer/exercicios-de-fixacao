const altosNumbers = [900, 109, 283, 29, 54, 400, 500, 2];
const verificNumbers = altosNumbers.some(num => num > 500);

console.log(`Há números maiores que 500: ${verificNumbers}`);