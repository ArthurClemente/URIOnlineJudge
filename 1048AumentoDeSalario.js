var input = require("fs").readFileSync("stdin", "utf8")

let valor = parseFloat(input)
let percentuais = [0.15, 0.12, 0.10, 0.07, 0.04]

if(valor >= 0 && valor <= 400.00){
    let reajuste = parseFloat(percentuais[0])
    let aumento = valor * reajuste
    valor = valor + aumento
    console.log(`Novo salario: ${valor.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${reajuste*100} %`)
}

else if(valor >= 400.01 && valor <= 800.00){
    let reajuste = parseFloat(percentuais[1])
    let aumento = valor * reajuste
    valor = valor + aumento
    console.log(`Novo salario: ${valor.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${reajuste*100} %`)
}


else if(valor >= 800.01 && valor <= 1200.00){
    let reajuste = parseFloat(percentuais[2])
    let aumento = valor * reajuste
    valor = valor + aumento
    console.log(`Novo salario: ${valor.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${reajuste*100} %`)
}


else if(valor >= 1200.01 && valor <= 2000.00){
    let reajuste = parseFloat(percentuais[3])
    let aumento = valor * reajuste
    valor = valor + aumento
    console.log(`Novo salario: ${valor.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${(reajuste*100).toFixed(0)} %`)
}


else if(valor > 2000.00){
    let reajuste = parseFloat(percentuais[4])
    let aumento = valor * reajuste
    valor = valor + aumento
    console.log(`Novo salario: ${valor.toFixed(2)}`)
    console.log(`Reajuste ganho: ${aumento.toFixed(2)}`)
    console.log(`Em percentual: ${reajuste*100} %`)
}
