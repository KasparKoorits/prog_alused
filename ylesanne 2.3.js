const readline = require('node:readline');

let vanus = null;
let sugu = null;
let treeningTyyp = null;
let pulss = null;
let minPulss = null;
let maxPulss = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function GatherInfo() {
    return new Promise((resolve) => {
        rl.question("Sisestage enda vanus: ", insertedVanus => {
            vanus = parseInt(insertedVanus);

            rl.question("Sisestage enda sugu (M, m või N, n): ", insertedSugu => {
                sugu = capitalizeFirstLetter(insertedSugu);

                if (sugu === "M") {
                    pulss = 220 - vanus;
                } else if (sugu === "N") {
                    pulss = 206 - (vanus * 0.88);
                } else {
                    console.log("Vale sugu! Palun sisestage M/m või N/n.");
                    rl.close();
                    return;
                }

                rl.question("Sisestage treeningu tüüp (1, 2 või 3): ", insertedTreening => {
                    treeningTyyp = parseInt(insertedTreening);

                    if (treeningTyyp === 1) {
                        minPulss = pulss * 0.5;
                        maxPulss = pulss * 0.7;
                    } else if (treeningTyyp === 2) {
                        minPulss = pulss * 0.7;
                        maxPulss = pulss * 0.8;
                    } else if (treeningTyyp === 3) {
                        minPulss = pulss * 0.8;
                        maxPulss = pulss * 0.87;
                    } else {
                        console.log("Vale treeningu tüüp! Palun sisestage 1, 2 või 3.");
                        rl.close();
                        return;
                    }

                    rl.close();
                    resolve();
                });
            });
        });
    });
}

function OutputInfo() {
    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(minPulss)} kuni ${Math.round(maxPulss)}`);
}

async function main() {
    await GatherInfo();
    OutputInfo();
}

main();
