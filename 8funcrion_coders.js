let x=2;
console.log(x);

//calculate area - test 1
function areacalc (height , width){
    const area = height * width;
    return area;
}
 const area = areacalc(12,12);
 console.log(area);//144 in console

//logged in specific user that is called ,to display on console

function loggedinsuccess (username , password){
    password ='bj'
    password = "bjm"
    password = 123; // all the above syntax is just correct for passwords
    console.log(password);
}
const passwords = loggedinsuccess('122secret');
console.log(passwords);

//loggedin3

function login(username , password){
console.log(password);
console.log('${username} , logged in succesfully '); // ni chala
console.log("edfg") //edfg is varible 
}
login("sedc" , "wsdcdfc"); //wsdcdfc is returning in console password in passed in calling
login("fv"); //undefined as fv is username for login function
login("jy" ,"raghav" );

// Tou maa baap kya bole bol . Jab tu bachpan mein kisi chiz ko chahata tha tab tere maa baap tujhe Lake diye hi honge. Ab Teri baari unhe baas itna dikhana hai ki unki parwarish mein koi kami nahin thi . You can never pay back to your parents by any mean just they want you to be successful . If their word hurts you , try to earn as soon as possible . Don't waste your time


// // //pdf story
// function pdfshow(){
//     const show = "abc.pdf";
//     console.log(show);
// }
// pdfshow();

const show = "xyz.pdf"; //define show variable storing gloablly to overcome "show not defined"
function pdfshow(){
    console.log(show);
}
pdfshow() //Uncaught ReferenceError: show is not defined ie show is not defined in which contains pdf ,overcome this : assign globally then use
// console.log(show);



// Function  experession and declaring : Means to define the function and storing it into variable

const showme = function showcontent(){
    console.log("hi");
}
showme() // functiin expression::

//simple uppertext text prog

function uppertexting (text){
 return text.toUpperCase();
}
uppertexting("raghav ");


//IMMEDIATE INVOKED FUNCTION EXPRESSION
(function setup(){
    console.log("qwertyui");
})();

// Arrow Functionssssss test:last

// const logined = function (){
//     console.log("hiiii");
// }
// logined();

// overcoming above text:

const raghav = () => {
        console.log("hiiii");

}
    raghav();
