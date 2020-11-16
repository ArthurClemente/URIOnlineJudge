var input = require("fs").readFileSync("stdin", "utf8")

var minutoPorKM = 2
var kilometro = parseInt(input)

var tempoNecessario = minutoPorKM * kilometro

console.log(tempoNecessario + " minutos")