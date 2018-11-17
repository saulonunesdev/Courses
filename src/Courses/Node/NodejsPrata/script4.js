console.log('Manipulando Arquivos');

const fs = require("fs");

fs.writeFile(process.argv[2], process.argv[3], (err) => {
    if (err)
        throw err;
    console.log(`Arquivo ${process.argv[2]} Salvo com Sucesso`);
});