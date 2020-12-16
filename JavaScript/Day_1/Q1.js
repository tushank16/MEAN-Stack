/*
Q1. Write function bigno(){} which will accept 5 number as array and return max value. 
This function should work even if you pass different number of argument.
*/
'use strict'
function bigno(a,b,c,d,e) {
    let bgno = a;
    if (b>bgno) {
        bgno = b;
    }
    if (c>bgno) {
        bgno = c;
    }
    if (d>bgno) {
        bgno = d;
    }
    if (e>bgno) {
        bgno = e;
    }
    return bgno;
}


var args = [111,8,88,5,139,66,8888];
var bigno = bigno(...args);
document.write(bigno);
