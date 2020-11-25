var input = require("fs").readFileSync("stdin", "utf8")
var valores = input.split(' ')

let v1 = parseFloat(valores.shift())
let v2 = parseFloat(valores.shift())
let v3 = parseFloat(valores.shift())

function ehTriangulo(a, b, c){
    if(a < b + c){
        if(b < a + c){
            if(c < a + b){
        return true
        }
    }
}else{
    return false
}
}

function calcularPerimetroTriangulo(a, b, c){
    let P = 0
    P = a + b + c
    console.log(`Perimetro = ${P.toFixed(1)}`)
}

function calcularAreaTrapezio(a, b, c){
    let baseMaior = 0
    let baseMenor = 0
    if(a > b){
        baseMaior = a
        baseMenor = b
    }else{
        baseMaior = b
        baseMenor = a
    }
    let A = 0
    A = ((baseMaior + baseMenor) * c) / 2
    console.log(`Area = ${A.toFixed(1)}`)
}


if(ehTriangulo(v1, v2, v3)){
    calcularPerimetroTriangulo(v1, v2, v3)
}else{
    calcularAreaTrapezio(v1, v2, v3)
}