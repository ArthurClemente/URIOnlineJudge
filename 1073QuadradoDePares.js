var input = require("fs").readFileSync("stdin", "utf8")

let valor = parseInt(input)
for(let c = 1; c <= valor; c++){
    if(c % 2 === 0){
        let quadrado = c * c
        console.log(`${c}^2 = ${quadrado}`)
    }
}