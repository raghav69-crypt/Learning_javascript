const bulb = document.querySelector("#bulb");
const bulbswitch = document.querySelector("#bulbswitch");

bulbswitch.addEventListener("click" , function(){
    console.log(bulb.src);
    bulb.src = "./bulon.gif";
});