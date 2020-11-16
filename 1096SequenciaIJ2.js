let i = 1
let j = 7
while(i <= 9){
    console.log(`I=${i} J=${j}`)
    j--
    if(j < 5){
        i = i+2
        j = 7
    }
}