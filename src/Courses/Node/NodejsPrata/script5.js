console.log('Utilizando Modulo Proprio');

//const fatorial = require('./fatorial').fatorial;

const fatorial = require('./fatorial');

const num = parseInt(process.argv[2]);

const valorfinal = fatorial(num);

console.log('Fatorial de '+num+' é igual a '+valorfinal);