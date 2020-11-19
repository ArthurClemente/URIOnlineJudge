var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let lista =[]

function criarLista(array){
    for(let c = 0; c < 100; c++){
        array.push(parseInt(linhas.shift()))
    }
}

function maiorValorEPosicao(array){
    let maiorValor = 0
    let index = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > maiorValor){
            maiorValor = array[i]
            index = i
        }
    }
    console.log(maiorValor)
    console.log(index)
}

criarLista(lista)
maiorValorEPosicao(lista)