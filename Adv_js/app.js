let h1 = document.querySelector("h1");

// setTimeout(()=>{
//     h1.style.color = "red";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "blue";
// },4000);


// setTimeout (()=>{
//     h1.style.color = "green";
// },6000);


// function changeColor(color,delay,nextColor){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if (nextColor) nextColor();
//     },delay);
// }
// changeColor("red",2000,()=>{
//     changeColor("orange",2000,()=>{
//         changeColor("green",2000, ()=>{
//             changeColor("yellow",2000)
//         });
//     });
// });
// callbacks nesting -> callback hell



// function savetoDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
    // if (internetSpeed > 4){
    //     success();
    // } else {
    //     failure();
    // }
// }

// savetoDb(
//     "apna college",
//     ()=>{
//         console.log('your data was saved: ');
//         savetoDb("hello world",()=>{
//             console.log("sucess2: data2 saved");
//         },()=>{
//             console.log("failure2: weak connection");
//         })
//     }, 
//     ()=>{
//         console.log("weak connection");
//     }
// );





function savetoDb(data,success,failure){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed > 4){
            resolve("success: data was saved");
        } else {
            reject("failure: weak connection");
        }
    });
}
savetoDb("Apna college")
.then(()=>{
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was reject");
})

