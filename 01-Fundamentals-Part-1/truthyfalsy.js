console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Matthias'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log('You should get a job');
}
let height = 0;
if (height) {
  console.log('Height is defined');
} else {
  console.log('Height is undefined');
}