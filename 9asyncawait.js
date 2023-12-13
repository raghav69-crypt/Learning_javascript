// Aysc await


function register() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("register's end");
        resolve();
      }, 1000);
    });
  }

  // function register(){
  //  return new Promise((resolve, reject) => {
  //   setTimeout(()=>{
  //     console.log("return new register");
  //     resolve();
  //   },1000);
  //  })
  // }


  
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
// agr hmare ko awync krna hai simple function m define krdo
// if we want that first it will call for register , email ,login, get, display

 async function authenticate(){
    await register();//jbtk register na call ho , agey mt bdho iske end hote hi welcome wala
    await welcome_email();
    await login();
    await get_user();
    await display_user();
}

authenticate(); //:register's end output
// 9asyncawait.js:16 welcome's  end
// 9asyncawait.js:25 login's end
// 9asyncawait.js:33 getuser's end
// 9asyncawait.js:42 display_user's end

// dekhne mai syncrhornous as like the sequence but it is not



// For know our code is working or not simply , use then()

authenticate().then(()=>{
console.log("All set Good to Go!"); });
// }).catch((error)=>{
//     console.log(error); //send email wala error catched , but display user wala ni chalega!
// });

console.log("Other Application work");


// How to handle the rejection in async Await!

//Simply kisi function ko reject krdo , then autheniction.then() code mai error handle krlo catch

function get_user() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       
        return reject(" Now i am reject and i will be handled by catch in authentication as async");
        console.log("getuser's end");
      }, 1000);
    });
  }
  
//how the error is handled
  authenticate().then(()=>{
    console.log("All set Good to Go!"); });
    // }).catch((error)=>{
    //     console.log(error); //send email wala error catched , but display user wala ni chalega!
    // });
    


//if we want ki agey ka chaley simply try lgao fir catch krdo!

async function authenticate(){
   try{

    await register();//jbtk register na call ho , agey mt bdho iske end hote hi welcome wala
    await welcome_email();
    await login();
    await get_user();
    await display_user();
}
catch(err){
    console.log(err);
}
}


