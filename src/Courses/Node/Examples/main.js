//const fatorial = require('./fatorial').fatorial
const fatorial = require('./fatorial')

const argv = require('yargs').demandOption('num').argv

//const num = parseInt(process.argv[2])
const num = argv.num
//Command -> node main.js 6
//Command -> node main.js --num=6
console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

console.log(module.paths)