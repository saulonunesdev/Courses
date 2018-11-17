console.log('Precedencia dos fatores');

const fatores = require('./fatores');

const num = parseInt(process.argv[2]);

const valorfinal = fatores(num);

console.log('Fatorial de '+num+' é igual a '+valorfinal);