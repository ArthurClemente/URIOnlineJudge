let input = require("fs").readFileSync("stdin", "utf8")
let valores = input.split('\n')

let casos = valores.shift()
let divisores = []

for(let c = 0; c < casos; c++){
    let numero = parseInt(valores.shift())
    for(let divisor = numero - 1; divisor >= 1; divisor--){
        if(numero % divisor === 0){
            divisores.push(divisor)
        }
    }

    let ehPerfeito = 0
    for(let c = 0; c < divisores.length; c++){
        ehPerfeito += divisores[c]
    }

    if(ehPerfeito === numero){
        console.log(`${numero} eh perfeito`)
        divisores = []
        ehPerfeito = 0
    }
    else {
        console.log(`${numero} nao eh perfeito`)
        divisores = []
        ehPerfeito = 0
    }
}