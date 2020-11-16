let input = require("fs").readFileSync("stdin", "utf8")
let valores = input.split(' ')

let codigo = parseInt(valores.shift())
let quantidade = parseInt(valores.shift())

const cod1 = 4.00
const cod2 = 4.50
const cod3 = 5.00
const cod4 = 2.00
const cod5 = 1.50

if(codigo === 1){
    let total = cod1 * quantidade
    console.log(`Total: R$ ${total.toFixed(2)}`)
}

if(codigo === 2){
    let total = cod2 * quantidade
    console.log(`Total: R$ ${total.toFixed(2)}`)
}

if(codigo === 3){
    let total = cod3 * quantidade
    console.log(`Total: R$ ${total.toFixed(2)}`)
}

if(codigo === 4){
    let total = cod4 * quantidade
    console.log(`Total: R$ ${total.toFixed(2)}`)
}

if(codigo === 5){
    let total = cod5 * quantidade
    console.log(`Total: R$ ${total.toFixed(2)}`)
}