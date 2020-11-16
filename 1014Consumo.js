var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split("\n")

var distanciaTotal = parseInt(linhas.shift())
var combustivelGasto = parseFloat(linhas.shift())

var gastoMedio = distanciaTotal / combustivelGasto

console.log(`${gastoMedio.toFixed(3)} km/l`)