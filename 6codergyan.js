//test 1 : console show and alert in HTML

console.log("coding here from js");
alert('Raghav Here');  

// var x = 5;
// var y = 10;
// document.getElementById("demo").innerHTML = x+y;

//test 3 : object creation and calling for object as well as value in the object

 const Watch= {
    model : "Firebolt" , color : "black" , range: "5000"
}
// if consoled @ watch then all properties will visible in console
console.log(Watch);

// display the color of the watch
console.log(Watch.color);      



// *test 4: let concept : deals with the block means ki block tk chalna

if(true){

    let age = '23' //output be 23 on console is in the scope : perfectly run
    console.log(age);
}

if(true){
    let age = '23' //error as scope is vanished and console hum block ke baad krre
}
// console.log(age);


/////

//test 5 : concept of global and local varible : var number ek global hai jiska scope function ke andr 
//as well as bahar h number ko andr b lere bahar b andr console , 

var number = 50

function print() {
  var square = number * number
  console.log(square)   
}

console.log(number) // 50

print() // 2500

//test 6 : Hoisting concept : calling before declaring

//test 7 : Assigment Operators
let x=4;
console.log(x);

//compound operator
let g=2;
g++;
g+=1;
console.log(g);

//exponential operator
let j=10;
console.log(j**2);

//logical operator --- and

let happy = true && true;
console.log(happy); //returns true

/* const with same concept -- const because of the fix values*/
const loggedinUser = true;
const ishavingPermission = true;
//shows if both the condn are true then enjoy
if( loggedinUser && ishavingPermission){
    console.log("Succuss loggedin bhai");
}

//logical operator --- or which means if ek bhi true hua then true

const raghav = false;
const jy = true;
if(raghav || jy){
    console.log(" do dil ek jaan")
}
 // Ternary operator

 const user = "raghav";

 if(user === "raghav"){
    console.log("Let him in");
 }
 else{
    console.log(" Dont let him in");
 }

 //condition ? 'a' : '' ----- if true then a will work then not

 user === 'raghav' ?  console.log("Let him in") :  console.log(" Dont let him in");
 
 //Day 27 september

 const naman = ['a' , '4','erthj'];
 console.log(naman);

 //If we want to push an element
 naman.push('qwertyui');
 console.naman;

 //if we want to add @ beginning
naman.shift('iuytrewq');
console.naman; // remove the a from list 

//if we want to add qazwsx in the beginning
naman.unshift('qazwsx'); //adding qazwsx in beginning
console.naman;
//it will pop the last one
naman.pop();
console.log();

//show the last popped
console.log(naman.pop()); //erthj

//For loop concept
console.log('$');  
//if want to print it in 10 times? -- Use for loop

for (let i=0;i<10;i++){
    console.log('$');  //10 $
}

//Declaring objects within the arrays

const Musicians =  [
    {
        actor :'jy' ,
        payment : 12312345
    },
    {
        actor :'vikas' , 
        payment : 143
    },
    {
        actor : 'anjali' , 
        payment : '65432'
    }
];

    for( let i =0 ;i<Musicians.length;i++)
    {
    console.log(Musicians[i]); //All object will be visible in the log window
    }

 Musicians.forEach(Musician => {
  
 });hhg


