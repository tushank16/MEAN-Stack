/*
Q2. Write function fact(){} which will accept a number and return factorial of a number.
*/
'use strict'
function fact(a) {
    let fact = 1;
    for (let i = 1; i <= a; i++) {
        fact =  fact * i;       
    }
    return fact;
}

let x = 7;
document.write("Factorial of "+ x +" : "+fact(x));
