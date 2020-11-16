var input = require("fs").readFileSync("stdin", "utf8")
let valores = input.split(' ')

let valor1 = parseInt(valores.shift())
let valor2 = parseInt(valores.shift())

if(valor1 > valor2){
    let multiplo = valor1 % valor2
    if(multiplo === 0){
        console.log('Sao Multiplos')
    }else{
        console.log('Nao sao Multiplos')
    }
}

if(valor2 > valor1){
    let multiplo = valor2 % valor1
    if(multiplo === 0){
        console.log('Sao Multiplos')
    }else{
        console.log('Nao sao Multiplos')
    }
}