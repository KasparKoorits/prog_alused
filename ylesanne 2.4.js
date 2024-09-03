const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getRandomSeatLocation() {
    return Math.random() < 1/3 ? "Aknakoht" : "Vahekäigukoht";
}

function AskSeatSelection() {
    rl.question("Kas soovite istekoha valida (ise) voi loosida (loos)? ", answer => {
        if (answer === "ise") {
            rl.question("Kas soovite istuda akna ääres (aken) või mitte (muu)? ", seatPreference => {
                if (seatPreference === "aken") {
                    console.log("Valisite ise.");
                    console.log("Teie istekoht on: Aknakoht");
                } else if (seatPreference === "muu") {
                    console.log("Valisite ise.");
                    console.log("Teie istekoht on: Vahekäigukoht");
                } else {
                    console.log("Sisestasite vale valiku, proovi uuesti!");
                }
                rl.close();
            });
        } else if (answer === "loos") {
            console.log("Istekoht loositi.");
            const seatLocation = getRandomSeatLocation();
            console.log(`Teie istekoht on: ${seatLocation}`);
            rl.close();
        } else {
            console.log("Sisestasite vale valiku, proovi uuesti!");
        }
    });
}

AskSeatSelection();


