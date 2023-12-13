// raghav is varible
const raghav = [
    {
        name: "raghav",
        marks : 12
    },
    { name : "qq",
    marks :  33
    },

    { name : "ajay",
        marks :22
    }   
];

// raghav.forEach((ragha)=>{ //test1
// console.log(ragha);
// });


// const tt = raghav.forEach((ragha)=>{ //test 2
//     console.log(ragha);
//     });

//     console.log(tt);

// const failed = raghav.filter((rag)=>{
//     if(rag.marks<33){
//         return true;
//     }
//     else {
//         return false;   
//     }
// });

// console.log(failed);

//output    
// : 
// {name: 'raghav', marks: 12}
// 1
// : 
// {name: 'ajay', marks: 22}
// length
// : 
// 2


const Raghav = [{
 name : "Raghav", // for each rag (object)
 score : 100 ,
},{
name : "rid",
score : 89,
},{
    name : "ws",
    score: 90
}];
let total=0;
const result =  Raghav.forEach((Rag) => {
  total = total+Rag.score;
  console.log(total);   
});

