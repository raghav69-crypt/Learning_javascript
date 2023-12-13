// const havingheading = document.createElement("h2"); //havingheading var m h1 tag dala
// havingheading.innerHTML = "hey this is the new tag that enrolled"; // data inputted in 
// // console.log(havingheading);
// const parent = document.querySelector(".parent");//getting parent
// parent.appendChild(havingheading);// adding h2 after parent
// console.log(parent); // it will return h2 adter h1 tag!


// what if we want h2 first then h1

const havingheading = document.createElement("h2"); //havingheading var m h1 tag dala
havingheading.innerHTML = "hey this is the new tag that enrolled";
havingheading.insertAdjacentElement("beforebegin",havingheading);
console.log(havingheading);


