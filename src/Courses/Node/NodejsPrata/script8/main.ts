console.log('Salvando Arquivos Typescript');

import * as fs from 'fs'
import * as yargs from 'yargs'

const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(argv.filename, argv.content, (err) => {
    if (err) throw err
    console.log(`Arquivo ${argv.filename} Salvo com Sucesso`)
})

//$ node main.js --f=ARQUIVO --c=CONTEUDO
//node dist/main.js --f=ARQUIVO --c=CONTEUDO