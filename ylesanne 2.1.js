const readline = require('node:readline');

let temperatuur = null;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Mis on temperatuur? ', (insertedTemperatuur) => {
    temperatuur = parseFloat(insertedTemperatuur);

    if (temperatuur > 4.0) {
        console.log('Ei ole jäätumise ohtu!');
    } else {
        console.log('On jäätumise oht');
    }
    rl.close();
});
