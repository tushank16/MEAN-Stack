/*
Q4. Display your name in all heading tag. [h1 to h6] but you will use for loop and write method..
*/
'use strict'
function name_in_heading_tag(hname) {

    for (let i = 1; i <= 6; i++) {
        document.write("<h"+i+">"+hname+"</h"+i+">");
        document.write(`<h${i}>${hname}</h${i}>`); //VS code suggession 
    }

}

let hname = "tushank Shingte";
name_in_heading_tag(hname);