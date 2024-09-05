const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mitu pöialpoissi tahab õunu (0 kuni 7)? ", (input) => {
  const pöialpoissideArv = parseInt(input, 10);
  let lumivalgekeseÕunad = 14;

  if (pöialpoissideArv >= 0 && pöialpoissideArv <= 7) {
    for (let i = 0; i < pöialpoissideArv; i++) {
      const õunad = Math.floor(Math.random() * 2) + 1;
      console.log(õunad); // Ainult number, kui palju õunu pöialpoiss sai
      lumivalgekeseÕunad -= õunad;
    }
    console.log(`Lumivalgekesele jäi ${lumivalgekeseÕunad} õuna.`);
  }

  rl.close();
});
