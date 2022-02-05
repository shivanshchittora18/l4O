'use strict'

let reader = require ('readline-sync')

let x = reader.question("Give a Number: ") // to evaluate (4xx + 8x + 3)

function getvalue(x){
    return ((4*x*x) + (8*x) + (3))
}

document.write(`answer is : ${getvalue(x)}`)