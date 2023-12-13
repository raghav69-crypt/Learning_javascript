// function register(){
//     setTimeout(() =>{
// console.log("register's end");
//     }); 10000}

// function welcome_email(){
//         setTimeout(() =>{
//     console.log("welcome's  end");
//         }); 2000 }

// function login(){
//             setTimeout(() =>{
//         console.log("login's end");
//             }); 3000}

//             function get_user(){
//                 setTimeout(() =>{
//             console.log("getuser's end");
//                 });4000 }

//                 function display_user(){
//                     setTimeout(() =>{
//                 console.log("display_user's end");
//                     }); 1000}

/* Expected calling of functions view no matter whatver the indivual function takes the time */
// register();
// welcome_email();
// login();
// get_user();
// display_user();

function register(callback) {
  setTimeout(() => {
    console.log("register's end");
    callback();
  }, 10000);
}

function welcome_email() {
  setTimeout(() => {
    console.log("welcome's  end");
  }, 2000);
}
function login() {
  setTimeout(() => {
    console.log("login's end");
  }, 3000);
}
function get_user() {
  setTimeout(() => {
    console.log("getuser's end");
  }, 4000);
}
function display_user() {
  setTimeout(() => {
    console.log("display_user's end");
  }, 5000);
}

register(function () {
  //indicates register ka code to phle chalega hi fir baki wali also but for sequence we will use the all function in the callbacks : check down code
  welcome_email();
  login();
  get_user();
  display_user();
});

welcome_email();
login();
get_user();
display_user();

// what will run first : sequence bhi acb as b is asynchrous so easy code will outputted first
console.log("hi i will run first"); //a

setTimeout(() => {
  console.log("timeout"); //b
}, 0);

console.log("end"); //c

//optimised callback code --but somewhat complex * so promises came into the picture *

function register(callback) {

  setTimeout(() => {
    console.log("register's end");

    callback();

  }, 10000);
}

function welcome_email(callback) {

  setTimeout(() => {
    console.log("welcome's  end");

    callback();

  }, 2000);
}

function login(callback) {

  setTimeout(() => {
    console.log("login's end");

    callback();

  }, 3000);
}

function get_user(callback) {

  setTimeout(() => {
    console.log("getuser's end");

    callback();

  }, 4000);
}

function display_user(callback) {

  setTimeout(() => {
    console.log("display_user's end");

    callback();

  }, 5000);
}

register(function () { // in above we have passed callback now we are calling for the same
  welcome_email(function () {
    login(function () {
      get_user(function () {
        display_user();
      });
    });
  });
});

console.log("other works hey!")
