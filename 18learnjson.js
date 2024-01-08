//  let resp  = '{"fact":"When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down.","length":97}';
//  console.log(resp);
//  console.log(resp.fact); // undefined due to accessing the json format , convert the same in js object

//  let converteddata = JSON.parse(resp);
//  console.log(converteddata.fact);
//////////////

let url = "https://catfact.ninja/fact"; //api

fetch(url) //if response was made and resolved then we are consoling the response
  .then((res) => {
    console.log(res);
    res.json(); //parse of data in js obj
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // if somehow the resp is not there , catch the error for same
    console.log("error = ", err);
  });
// Response {type: 'cors', url: 'https://catfact.ninja/fact', redirected: false, status: 200, ok: true, …}
// This shows that correct uRL is requested

///////////////

//Writing same methodology with two diff request : Promise Sequence (Data 1 and data 2)

fetch(url)
  .then((res) => {
    return res.json(); //readable object format
  })
  .then((data) => {
    console.log("data1 = ", data.fact); //data.fact here is only fact
    return fetch(url); //Secondly fetch URL
  })
  .then((res) => {
    return res.json(); // readble for second
  })
  .then((data2) => {
    console.log("data2 = ", data2.fact);
  })
  .catch((err) => {
    console.log("show res = ", err);
  });

//////////////
// Using Aysnc Await
async function getfacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (e) {
    console.log("error is = ", e);
  }
}

/////////////////////////
//Axios Over fetch : in the fetch jb hum url ko fetch krre te to data exact response ni dera tha we have to parse the same
// But in case of the aximos no conversion is used

async function getfactss() {
  try {
    let res = await axios.get(url);
    return res.data.fact;
  } catch (e) {
    console.log("error is == ", e);
    return "No facts are there";
  }
}
//////

///now we are expecting that the button click will return the response in console as well as html

// let btn = document.querySelector("button"); //button is selected

// btn.addEventListener("click" , async()=>{ // Async await due to returning Promise
// let fact = await getfactss();
// // console.log(fact);
// let p = document.querySelector("#fact");
// p.innerHTML  = fact;
// });

//== button pr click krne pr async callback run == then function RUN

//////////////////
/// On button click the image should be changed (DogApi)
let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";


// btn.addEventListener("click", async () => { // not this is working
//   // Async await due to returning Promise
//   let link = await getimages();
//   console.log(link);
// });

btn.addEventListener("click", async () => {
    try {
      let link = await getImages();
      console.log(link);
    } catch (error) {
      console.log("Error: ", error);
    }
  });



async function getImages() { //function is working fine
  try {
    let res = await axios.get(url2);
    return res.data.message;
  } catch (e) {
    console.log("error is == ", e);
    return "/";
  }
}
//////
