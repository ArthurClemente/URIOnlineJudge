var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let casos = parseInt(linhas.shift())

let c = 1
while(c <= casos){
    let valores = linhas.shift()
    let inteiros = valores.split(' ')
    let x = parseInt(inteiros.shift())
    let y = parseInt(inteiros.shift())
    
    if(y === 0 ){
        console.log('divisao impossivel')
    }else{
        let resultado = x / y
        console.log(resultado.toFixed(1))
    }
    c++
}