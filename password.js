let password = "Eddiemusonlives86";

let lettersCount = 0;
let numbersCount = 0;
let upperCaseLettersCount = 0;
let lowerCaseLettersCount = 0;

for (let i = 0; i < password.length; i++) {
  let character = password[i];

  if (isNaN(character)) {
    lettersCount += 1;
    // additional check #1 ensuring presence of uppercase and lowercase characters
    if (character == character.toUpperCase()) {
      upperCaseLettersCount += 1;
    }
    if (character == character.toLowerCase()) {
      lowerCaseLettersCount += 1;
    }
  } else {
    numbersCount += 1;
  }
}

if (
  password.length >= 10 &&
  // additional check #2 ensuring under maximum length (20 characters)
  password.length <= 20 &&
  lettersCount > 0 &&
  numbersCount > 0 &&
  upperCaseLettersCount > 0 &&
  lowerCaseLettersCount > 0
) {
  console.log("success he's Kas!");
} else {
  console.log("fail he's dead!");
}

console.log(
  `                             .-\') _            _  .-\')     (\'-.     .-\') _     .-\')    \r\n                            ( OO ) )          ( \\( -O )   ( OO ).-.(  OO) )   ( OO ).  \r\n   .-----.  .-\'),-----. ,--.\/ ,--,\'  ,----.    ,------.   \/ . --. \/\/     \'._ (_)---\\_) \r\n  \'  .--.\/ ( OO\'  .-.  \'|   \\ |  |\\ \'  .-.\/-\') |   \/\`. \'  | \\-.  \\ |\'--...__)\/    _ |  \r\n  |  |(\'-. \/   |  | |  ||    \\|  | )|  |_( O- )|  \/  | |.-\'-\'  |  |\'--.  .--\'\\  :\`\`.  \r\n \/_) |OO  )\\_) |  |\\|  ||  .     |\/ |  | .--, \\|  |_.\' | \\| |_.\'  |   |  |    \'..\`\'\'.) \r\n ||  |\`-\'|   \\ |  | |  ||  |\\    | (|  | \'. (_\/|  .  \'.\'  |  .-.  |   |  |   .-._)   \\ \r\n(_\'  \'--\'\\    \`\'  \'-\'  \'|  | \\   |  |  \'--\'  | |  |\\  \\   |  | |  |   |  |   \\       \/ \r\n   \`-----\'      \`-----\' \`--\'  \`--\'   \`------\'  \`--\' \'--\'  \`--\' \`--\'   \`--\'    \`-----\'`
);
