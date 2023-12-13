// function j(){
//     console.log(" concept of ecma ");

// }

// j();

// const r = ()=>{
//     console(" j is for you");
// }
// r();

//Additon functions test//

// function add(a,b){
//     console.log(a+b);
// }
// add(2,4);

// arrow functions //

// const addition = (a,b)=>{
//     console.log(a+b);

// }
// addition(4,2);

//test 3//

// const button = document.querySelector("#mybutton");

// const shop = {
// price : 120,
// buy: function(){
//     mybutton.addeventlistener("click", function(){
//         console.log(this);
//         console.log("I spent" + this.price); //this.price : i spent 120 should be output
//     });
// },
// };
// shop.buy();

// this keyword  -  implementation//

// const User  = {
//     username : "Raghav",
//     price : 999,
//     welcomeMessage : function(){
//         console.log("${this.Username}, welcome to Our Website");

//     }
// };

// User.welcomeMessage() // = ${this.Username}, welcome to Our Website
//     User.username = "qaz"
//     User.welcomeMessage()

// arrow function working
// const subtrct = (a, b ,c)=>{
//     console.log(a-b-c);
// };
// console.log(subtrct(2,3,4));

// -Detailed view of this keyword -

// let counter = function(){
//  count : 0,
//  increment : function(){
//     counter.count++;
//  }
// }
// counter.increment()

// working this keyword function : dusra object ko create krke call kia aur increment krwana ki kosis //

// let counter = Createcounter();

// let counter1 = Createcounter();

// function Createcounter() {
//   return {
//     count: 0,
//     increment: function () {
//       this.count++;
//     },
//   };
// }

// counter1.increment();
// counter1.increment();
// counter1.increment();
// console.log(counter1);   