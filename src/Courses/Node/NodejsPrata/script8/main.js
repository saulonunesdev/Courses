"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Salvando Arquivos Typescript');
const fs = require("fs");
const yargs = require("yargs");
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
fs.writeFile(argv.filename, argv.content, (err) => {
    if (err)
        throw err;
    console.log(`Arquivo ${argv.filename} Salvo com Sucesso`);
});
//$ node main.js --f=ARQUIVO --c=CONTEUDO
//node dist/main.js --f=ARQUIVO --c=CONTEUDO
