var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let casos = parseInt(linhas.shift())

const peso1 = 2
const peso2 = 3
const peso3 = 5

c = 1
while(c <= casos) {
    let valores = linhas.shift()
    let valReais = valores.split(' ')
    let valReais1 = parseFloat(valReais.shift())
    let valReais2 = parseFloat(valReais.shift())
    let valReais3 = parseFloat(valReais.shift())
    c++

    let mediaPonderada = ((valReais1 * peso1) + (valReais2 * peso2) + (valReais3 * peso3))/(peso1 + peso2 + peso3)
    
    console.log(mediaPonderada.toFixed(1))
}