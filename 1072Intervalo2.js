var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let casos = parseInt(linhas.shift())

let c = 1
let dentro = 0
let fora = 0
while(c <= casos){
    let valores = parseInt(linhas.shift())
    if(valores <= 10 && valores <= 20){
        dentro++
    }else{
        fora++
    }
    c++
}

console.log(dentro + ' in')
console.log(fora + ' out')