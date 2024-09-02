const readline = require('node:readline')

let name = null
let permittedSpeed = null
let speedOver = null
let fine = null

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout,
});

function GetFineInfo() {
    return new Promise((resolve) => {
        rl.question('Sisesta oma nimi: ', (insertedName) => {
            name = insertedName;

            rl.question('Sisestage lubatud kiirus (km/h): ', (insertedPermittedSpeed) => {
                permittedSpeed = insertedPermittedSpeed;

                rl.question('Sisestage tegelik kiirus (km/h): ', (insertedSpeedOver) => {
                    speedOver = insertedSpeedOver;
                    
                    rl.close();
                    resolve();
                });
            });
        });
    });
} 

function CalculateFine() {
    const difference = speedOver - permittedSpeed;

    if (difference > 0) {
        let calculatedFine = difference * 3;

        if (calculatedFine > 190) {
            fine = 'vangi minek kiiruse ületamise eest!';
        } else {
            fine = `${calculatedFine} euro.`;
        }
    }
} 

function PrintFine() {
    console.log(`${name}, kiiruse ületamise eest teie trahv on ${fine}`);
}

async function main() {
    await GetFineInfo();
    CalculateFine();
    PrintFine();
}

main();

// Ma proovisin kasutada Function meetodit mingit moodi ja sain selle programmi tööle pärast 2 tundi :D