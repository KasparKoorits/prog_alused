const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisesta täringute arv: ", (input) => {
  const täringuteArv = parseInt(input, 10);

  if (!isNaN(täringuteArv) && täringuteArv > 0) {
    for (let i = 0; i < täringuteArv; i++) {
      console.log(Math.floor(Math.random() * 6) + 1);
    }
  }

  rl.close();
});
