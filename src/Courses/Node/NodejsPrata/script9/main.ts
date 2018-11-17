console.log('Fatorial Typescript Debugger')

import {fatorial} from './fatorial'
import * as yargs from 'yargs'

const argv = yargs.demandOption('num').argv

const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

//$ node dist/main.js --num=5
//$ node --inspect-brk dist/main.js --num=5