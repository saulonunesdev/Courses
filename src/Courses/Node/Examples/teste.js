console.log('n-fatorial')

/*
console.log('Diretorio '+process.cwd())
console.log(`Diretorio ${process.cwd()}`)

process.on('exit', () => {
  console.log('fim')
})
*/

const fatorial  = (num)=>{
  if(num === 0) {
    return 1
  }

  return num * fatorial (num - 1)
}

console.log(process.argv)

const num = parseInt(process.argv[2])

//Command -> node teste.js 10
console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)