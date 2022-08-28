let password = "eddiemusonlives86";

let lettersCount = 0;
let numbersCount = 0;

for (let i = 0; i < password.length; i++) {
  let character = password[i];

  if (isNaN(character)) {
    lettersCount += 1;
  } else {
    numbersCount += 1;
  }
}

if (password.length >= 10 && lettersCount > 0 && numbersCount > 0) {
  console.log("success!");
} else {
  console.log("fail!");
}
