const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage mitu korda äratada: ", (vastus) => {
  function Arata() {
    for (let i = 0; i < vastus; i++) {
      console.log("Touse ja sara!");
    }
  }

  Arata();
  rl.close();
});
