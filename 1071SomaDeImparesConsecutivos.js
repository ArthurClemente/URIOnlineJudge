var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let valor1 = parseInt(linhas.shift())
let valor2 = parseInt(linhas.shift())

function somaDosImpares(v1, v2){
    let maiorValor = 0
    let menorValor = 0
    let lista =[]

    if(v1 > v2){
        maiorValor = v1
        menorValor = v2
    }else if(v2 > v1){
        maiorValor = v2
        menorValor = v1
    }

    for(let i = menorValor; i <= maiorValor; i++){
        lista.push(i)
    }
    lista.shift()
    lista.pop()

    let soma = 0
    for(let i = 0; i < lista.length; i++){
        if(parseInt(lista[i]) % 2 !== 0){
            soma += lista[i]
        }
    }
    console.log(soma)
}

somaDosImpares(valor1, valor2)