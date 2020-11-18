var input = require("fs").readFileSync("stdin", "utf8")

let ddd = parseInt(input)

let listaCidades = ['Brasilia', 'Salvador', 'Sao Paulo', 'Rio de Janeiro', 'Juiz de Fora', 'Campinas', 'Vitoria', 'Belo Horizonte']
let listaDDD = [61, 71, 11, 21, 32, 19, 27, 31]

function encontrarCidade(array) {
    let semDDD = 99
    for(let c = 0; c < listaDDD.length; c++){
        let lista = parseInt(listaDDD[c])
        if(ddd === lista){
            semDDD = c
            console.log(listaCidades[c])
        }
    }
    if(semDDD === 99){
        console.log('DDD nao cadastrado')
    }
}

encontrarCidade(listaDDD)
