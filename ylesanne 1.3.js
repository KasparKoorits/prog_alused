const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage astme alus: ', num => {
    alus = num
    rl.question('Sisestage astme astendaja: ', num => {
        astendaja = num
        console.log(alus ** astendaja)
        rl.close()
    })
}) 