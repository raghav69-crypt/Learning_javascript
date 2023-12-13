// basically we have structure in html and with having the tags properly and we want to manipulate 
// the html structure , so how we will be interact with javascript means the html is manipulated with
// javascript , so for achieving this the html code structure is converted into the object , where 
// the object is the structure of javascript.

// basically just imagine we have the code for showing the Dom manipulation in browser window and we 
// we want to interact with the javascript

// in inspect we are having the html , body , head where on expanding html , head and body it will result
// in the tags inside it.

// Dom : Document object monipulation
// javascript ka use krke document structure kio manipulate krna

/*For getting data from document for h1 which is having the heading */

const heading = document.getElementById("heading");
console.log(heading);
// it will return the whole heading


const taging = document.getElementsByTagName("h1");
// console.log(taging); //size and the format in below but if we want to know complete tag then index 0 used
console.log(taging[0]); // complete tag recieved


// HTMLCollection [h1#heading, "heading ": h1#heading]
// 0
// : 
// h1#heading
// "heading "
// : 
// h1#heading
// length
// : 
// 1
// [[Prototype]]
// : 
// HTMLCollection  : basically the whole h1 tag is returned ,where if the document contain more than
// h1 so all the h1 will being returned.


//method 3 : getelemnt by class name

// simply if we have two classes , then use geteleementbyclassname("heading");
// console.log("heading");

//method 4 : query selector

//just we having one is id and other is class then use below syntax
// const heading = document.querySelector(#heading); //for the case of id while for class use .*

//method 5 :  Query selector all : it will return the all collectiion
//replace the queryallselector