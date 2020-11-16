var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split("\n")

var tempoGasto = parseInt(linhas.shift())
var KmPorHora = parseInt(linhas.shift())
var KmPorLitro = 12

var distancia = KmPorHora * tempoGasto
var litrosNecessarios = distancia / KmPorLitro

console.log(litrosNecessarios.toFixed(3))