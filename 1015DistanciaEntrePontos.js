var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

var ponto1 = linhas.shift()
var ponto2 = linhas.shift()

var valores1 = ponto1.split(" ")
var x1 = parseFloat(valores1.shift())
var y1 = parseFloat(valores1.shift())

var valores2 = ponto2.split(" ")
var x2 = parseFloat(valores2.shift())
var y2 = parseFloat(valores2.shift())

var distancia = Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1))

console.log(distancia.toFixed(4))