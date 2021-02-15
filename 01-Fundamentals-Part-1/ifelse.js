const age = 26;
if (age >= 18) {
  console.log('Matthias can start driving license');
} else {
const yearsLeft = 18 - age;
console.log(`Matthias is too young,wait another ${yearsLeft} years`);
}

const birthYear = 1994;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);