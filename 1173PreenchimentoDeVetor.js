var input = require("fs").readFileSync("stdin", "utf8")
let valor = parseInt(input)

const tamanho = 10
let N = []
for(let c = 0; c < tamanho; c++){
    N.push(valor)
    console.log(`N[${c}] = ${N[c]}`)
    valor = valor * 2
}