console.log('Utilizando Modulos Importados NPM');

const fatorial = require('./fatorial');
const argv = require('yargs').demandOption('num').argv;

//const num = parseInt(process.argv[2]);
const num = argv.num;

const valorfinal = fatorial(num);

console.log('Fatorial de '+num+' é igual a '+valorfinal);

//$ node main.js --num=5