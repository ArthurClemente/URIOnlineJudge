var input = require("fs").readFileSync("stdin", "utf8")
let linhas = input.split('\n')

let minutosRestantes = parseInt(linhas.shift())


let minutosDosPresentes = linhas.shift()
let minutos = minutosDosPresentes.split(' ')
let presente1 = parseInt(minutos.shift())
let presente2 = parseInt(minutos.shift())

if(presente1 + presente2 <= minutosRestantes){
    console.log('Farei hoje!')
}else {
    console.log('Deixa para amanha!')
}
