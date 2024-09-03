const readline = require('node:readline');

let ainePunkt = null;
let nadal = null;
let finalHours = null;

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
});


function GetUserInfo() {
    return new Promise((resolve) => {
        rl.question('Sisesta ainepunktide arv: ', (inputtedPunkt) => {
            ainePunkt = inputtedPunkt;

            rl.question('Sisestage nädalate arv: ', (insertedNadal) => {
                nadal = insertedNadal;

                rl.close();
                resolve();                              
            });
        });
    });
} 

function CalculateHours() {
    finalHours = Math.round(ainePunkt * 26 / nadal);    
}


function PrintResult() {
    console.log(`${finalHours}`);
}  


async function main() {
    await GetUserInfo();
    CalculateHours();
    PrintResult();
}

main();