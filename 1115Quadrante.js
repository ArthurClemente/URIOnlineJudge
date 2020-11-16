let input = require("fs").readFileSync("stdin", "utf8")
let linhas = input.split('\n')

c = 0
linhas.forEach(function(item, index) {
    c = index
})

n = 0
while(n < c+1) {
    let valores = linhas.shift()
    let inteiros = valores.split(' ')
    let valX = parseInt(inteiros.shift())
    let valY = parseInt(inteiros.shift())
    
    if(valX === 0 || valY === 0 ) {
        break;
    }
    
    if(valX > 0 && valY > 0) {
        console.log('primeiro')
    }
    
    if(valX < 0 && valY > 0) {
        console.log('segundo')
    }
    
    if(valX < 0 && valY < 0) { 
        console.log('terceiro')
    }
    
    if(valX > 0 && valY < 0) {
        console.log('quarto')
    }
    
    n++
}


