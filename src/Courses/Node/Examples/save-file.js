const fs = require('fs')

const argv = require('yargs')
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(argv.filename, argv.content, (err) => {
    if (err) throw err
    console.log(`Arquivo ${argv.filename} Salvo com Sucesso`)
})

//Comando -> node save-file.js arquivo.txt "arquivo"
//node save-file.js --filename=teste.txt --content=arquivo
//node save-file.js --f=teste.txt --c=arquivo