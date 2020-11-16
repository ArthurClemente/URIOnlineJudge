var input = require("fs").readFileSync("stdin", "utf8")

let valor = parseInt(input)
for(let c = 1; c <= 10; c++){
    let resultado = c * valor
    console.log(`${c} x ${valor} = ${resultado}`)
}