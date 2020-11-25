var input = require("fs").readFileSync("stdin", "utf8")
let limite = parseInt(input)

function numerosImpares(valorFinal){
    for(let c = 1; c <= valorFinal; c++){
        if(c % 2 !== 0){
            console.log(c)
        }
    }
}

numerosImpares(limite)