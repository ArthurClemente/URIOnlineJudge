var input = require("fs").readFileSync("stdin", "utf8")

let tempoSegundos = parseInt(input)
let horaEmSegundos = 3600

let horas = parseInt(tempoSegundos / horaEmSegundos)

let minutos = parseInt((tempoSegundos-(horaEmSegundos*horas))/60)

let segundos = parseInt((tempoSegundos-(horaEmSegundos*horas)-(minutos*60)))

console.log(`${horas}:${minutos}:${segundos}`)