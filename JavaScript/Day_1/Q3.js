/*
Q3. Using java script print your name in bold. Put your name in a variable and then print it.
*/
'use strict'
function name_in_bold(bname) {
    document.write("<b>"+hname+"</b></br>");
    document.write(`<b>${bname}</b>`); //VS code suggession 
}

let hname = "tushank Shingte";
name_in_bold(bname);