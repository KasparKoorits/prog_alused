const readline = require("node:readline");

let size;
let header;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function GetUserInput() {
  return new Promise((resolve) => {
    rl.question("Sisestage kirja suurus: ", (insertedSize) => {
      size = insertedSize;

      rl.question("Sisestage kirja teema pealkiri: ", (insertedHeader) => {
        header = insertedHeader;

        rl.question("Kas kirjaga on kaasas fail: ", (insertedFile) => {
          file = insertedFile;

          rl.close();
          resolve();
        });
      });
    });
  });
}

function CheckIfSpam() {
  if (size > 1 || header == "") {
    console.log("Kiri on spämm");
  } else {
    console.log("Kiri ei ole spämm");
  }
}
async function main() {
  await GetUserInput();
  CheckIfSpam();
}

main();
