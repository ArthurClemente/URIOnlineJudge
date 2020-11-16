var input = require("fs").readFileSync("stdin", "utf8")
let limite = parseInt(input)

const tamanho = 1000
let N = []
let valor = 0
for(let c = 0; c < tamanho; c++){
    N.push(valor)
    console.log(`N[${c}] = ${N[c]}`)
    valor++
    if(valor === limite){
        valor = 0
    }
}