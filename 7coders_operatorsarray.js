// let x=10;
// console.log(x);

//Reduce -4//

// const result = [{
//  movie : "Salon",
//  budget : 34
// },{
//     movie : "96",
//     budget: 150
// },{
//  movie : "45" , 
//  budget : 200
// }];

// let total = 0;

// result.forEach((tot) => {
//     total += tot.budget;
// });
// console.log(total); //384

////Working of Reduce ////

// const finalresp = result.reduce((accumaltor , res)=>{
//     accumaltor = accumaltor+ result.budget;
// })
// console.log(finalresp);

////index of (checking the array element is in object) -6 ////

// const admin =[1,2,4];

// const user = {
//     name : "abc",
//     id : 4 // 2 as array contain 2nd position
// }
// const isAdmin = admin.indexOf(user.id)> -1 // -1 as 5 is not there in array

// console.log(isAdmin);
// console.log(admin.indexOf(user.id))

//// better than indexof --- INCLUDES ////

// console.log(admin.includes(user.id)) //return true as admin contain the user's object

////find////

//we have to find the object whose id is 2 , consoling the same

// const Users = [
// {
//  name : "raghav",
//  id : 1
// },
// {
//     name: "jyoti",
//     id : 2
// },
// {
//     name : "qaz",
//     id : 3
// }];

// const result = Users.find((user)=>{
//     if (user.id === 2){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(result);

//// Method sort ////

// const array = [32,6,9,4,8];
// const sortedarray = array.sort();
// console.log(sortedarray);

////SPLICE////

//Removing the particualar element with the no of conunt to be deleted

const arraySplice = [ "aee","ggf","gt","gtbg","grf"];

constResult = arraySplice.splice(2,2)
console.log(constResult);