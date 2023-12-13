// Below the code is commented
//Dom traversal

//1 parent node getting with the help of child , here in html we have h1 inside the div.
//  const heading = document.querySelector(".heading");
//  console.log(heading);

//  const parent = heading.parentNode;
//  console.log(parent); // it will return the parent div tag


 //2 getting children by parent nodes: say collection

//  const parent = document.querySelector(".parent");
//   console.log(parent.childNodes);

//   NodeList(3) [text, h1.heading, text]
// 0
// : 
// text
// 1
// : 
// h1.heading
// 2
// : 
// text
// length
// : 
// 3
// [[Prototype]]
// : 
// NodeList



//3 Getting the next element:

 const heading = document.querySelector("heading");
 console.log(heading.nextElementSibling); // it will return the h3 tag

 //4 : getting the previous tag element

 //h3 ko hold krke h1 nikalna
  const subheading = document.querySelector("h3");
  console.log(subheading.previousElementSibling); // it will return the h1 tag

