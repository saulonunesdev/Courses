console.log(module.id);

const fatores  = (num)=>{
    if(num === 0) {
      return 1
    }

    return num * fatores (num - 1)
}

module.exports = fatores;