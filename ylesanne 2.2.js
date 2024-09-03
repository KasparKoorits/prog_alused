const readline = require('node:readline');

let pereNimi = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage Leedu perenimi? ', (inputtedNimi) => {
    pereNimi = inputtedNimi;

    if (pereNimi.slice(-2) === "ne") {
        console.log("Abielus");
    } else if (pereNimi.slice(-2) === "te") {
        console.log("Vallaline");
    } else if (pereNimi.slice(-1) === "e") {
        console.log("Määramata");
    } else {
        console.log("Pole leedulanna perekonnanimi");
    }

    rl.close();
});
