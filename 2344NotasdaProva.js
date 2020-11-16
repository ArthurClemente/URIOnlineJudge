var input = require("fs").readFileSync("stdin", "utf8")

let nota = parseInt(input)

if(nota === 0){
    nota = "E"
}

if(nota >= 1 && nota <= 35){
    nota = "D"
}

if(nota >= 36 && nota <= 60){
    nota = "C"
}

if(nota >= 61 && nota <= 85){
    nota = "B"
}

if(nota >= 86 && nota <= 100){
    nota = "A"
}
console.log(nota)