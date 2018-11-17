console.log('Calculo de Fatorial');

const fatorial  = (num)=>{
    if(num === 0) {
      return 1
    }

    return num * fatorial (num - 1)
}

const num = parseInt(process.argv[2]);

const valorfinal = fatorial(num);

//console.log(`Fatorial de ${num} é igual a ${fatorial(num)}`);

console.log('Fatorial de '+num+' é igual a '+valorfinal);