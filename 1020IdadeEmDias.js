var input = require("fs").readFileSync("stdin", "utf8")

let dias = parseInt(input)

const ano = 365
const mes = 30

let qtdAnos = 0
let qtdMes = 0

while(dias >= ano) {
    dias = parseInt(dias - ano)
    qtdAnos ++
}

while(dias >= mes) {
    dias = parseInt(dias - mes)
    qtdMes ++
}

console.log(`${qtdAnos} ano(s)`)
console.log(`${qtdMes} mes(es)`)
console.log(`${dias} dia(s)`)