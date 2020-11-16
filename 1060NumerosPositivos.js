var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let casos = 6

let positivos = 0
let c = 1
while(c <= casos){
    let valores = parseFloat(linhas.shift())
    
    if(valores > 0) {
        positivos++
    }
    c++
}

console.log(positivos + ' valores positivos')