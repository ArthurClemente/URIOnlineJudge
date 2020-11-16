var input = require("fs").readFileSync("stdin", "utf8")
let valores = input.split(' ')

let valorAntes = parseFloat(valores.shift())
let valorDepois = parseFloat(valores.shift())

let valorDoAumento = valorDepois - valorAntes

let porcentagemDeAumento = (valorDoAumento * 100)/valorAntes

console.log(porcentagemDeAumento.toFixed(2) + '%')