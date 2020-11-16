var input = require("fs").readFileSync("stdin", "utf8")
var linhas = input.split('\n')

let casos = parseInt(linhas.shift())

console.log(casos)

for (let n = 1; n <= casos; n++) {
    console.log('I am Toorg!')
}