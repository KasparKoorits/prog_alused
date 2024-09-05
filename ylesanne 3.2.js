const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta ringide arv: ", (input) => {
  const ringideArv = parseInt(input, 10);
  let porganditeKoguarv = 0;

  for (let i = 2; i <= ringideArv; i += 2) {
    porganditeKoguarv += i;
  }

  console.log(`Saadud porgandite koguarv: ${porganditeKoguarv}`);
  rl.close();
});
