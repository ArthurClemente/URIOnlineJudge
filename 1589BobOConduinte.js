const { parse } = require("path")

var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let casos = parseInt(linhas.shift())

for(let c = 1; c <= casos; c++){
    let valores = linhas.shift()
    let inteiros = valores.split(' ')
    let v1 = parseInt(inteiros.shift())
    let v2 = parseInt(inteiros.shift())
    
    let menorRaio = v1 + v2
    console.log(menorRaio)
}