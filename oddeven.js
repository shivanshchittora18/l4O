'use strict';

let reader = require ('readline-sync');

let number = reader.question('give a number')


   if (number % 2 == 0) {
    console.log("number is even");
}

 else  {

   console.log("number is odd")
}