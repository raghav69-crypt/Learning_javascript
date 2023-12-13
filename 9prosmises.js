//write here for reduce the complexity of nesting we will use the promises,like the callback we
// we will use the promise here every function will return a promise : resolve , reject : resolve fro corecct code logic
// if the code contain some error then we will use reject
// agr hmare logic mai

//day23oct

function register() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log("register's end");
      resolve();
    }, 1000);
  });
}

function welcome_email() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("welcome's  end");
      resolve();
    }, 1000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login's end");
      resolve();
    }, 1500);
  });
}

function get_user() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getuser's end");
      resolve();
    }, 1000);
  });
}

function display_user() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("display_user's end");
      resolve();
    }, 1000);
  });
}

//isk then mtlb ki phle reigster ka chalega then welcomemail , but a condition which (resolve)
// hona cheyey for each conditio then pass lega

register()
.then(welcome_email)
.then(login)
.then(get_user)
.then(display_user);

 //above calling we have for promises and below we have for callback 
 // there is difference between the calling
// register(function () { // in above we have passed callback now we are calling for the same
//     welcome_email(function () {
//       login(function () {
//         get_user(function () {
//           display_user();
//         });
//       });
//     });
//   });
  
console.log("other application work");


//ouptut screen : other application work, register:getmail:login:getuser:displayuser






// what if there is reject is returned how the reject is to be handled
/**Because of this code the result as register ke baadwale code ni chalenge as error is not be being handled/ */
function register() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("register's end");
        reject("i will be printed as an error because i am not be handlable");
       
      }, 10000);
    });
  }

//step 2: return the reject and still the other function will also not run error in the register itself
//  function register() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
        
//        return reject("i will be printed as an error because i am not be handlable");
//        console.log("register's end");
        
//       }, 10000);
//     });
//   }
  //step 3: this will log the  [[[error : i will be printed as an error because i am not be handlable]]] in console

  register()
.then(welcome_email)
.then(login)
.then(get_user)
.then(display_user)
.catch((error)=>{ // this is basically for the register as being error in register
 console.log("error:" , error);
});



