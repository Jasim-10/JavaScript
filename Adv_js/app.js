// let h1 = document.querySelector("h1");

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





// function savetoDb(data,success,failure){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed > 4){
//             resolve("success: data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }
// savetoDb("Apna college")
// .then(()=>{
//     console.log("data 1 was saved");
//     return savetoDb("hello world");
// })
// .then(()=>{
//     console.log("data 2 was saved");
//     return savetoDb("jasim")
// })
// .then(()=>{
//     console.log("data 3 was saved");
// })
// .catch(()=>{
//     console.log("promise was reject");
// })




// function savetoDb(data,success,failure){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed > 4){
//             resolve("success: data was saved");
//         } else {
//             reject("failure: weak connection");
//         }
//     });
// }
// savetoDb("Apna college")
// .then((result)=>{
//     console.log("result1: ", result);
//     console.log("data 1 was saved");
//     return savetoDb("hello world");
// })
// .then((result)=>{
//     console.log("result2: ", result);
//     console.log("data 2 was saved");
//     return savetoDb("jasim")
// })
// .then((result)=>{
//     console.log("result3: ",result);
//     console.log("data 3 was saved");
// })
// .catch((error)=>{
//     console.log("result: ", error);
//     console.log("promise was reject");
// })




// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolve("color chnaged");
//         },delay);
//     });
// }

// changeColor("red",2000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange",2000)
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green",2000)
// })
// .then(()=>{
//     console.log("green color was complete");
//     return changeColor("yellow",2000);
// })
// .then(()=>{
//     console.log("yellow was completed");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue was completed");
// })
// .catch(()=>{
//     console.log("error");
// });



// async function greet(){
//     throw "404 page not found";
//     return "Hello World";
// }
// greet()
// .then((result)=>{
//     console.log("promise was resolved with result: ",result);
// })
// .catch((err)=>{
//     console.log("promise was rejected with err: ", err);
// })

// let demo = async () =>{
//     return 5;
// }




// let h1 = document.querySelector("h1");
// function changeColor(color,delay){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             if(num>7){
//                 reject("promises rejected");
//             }
//             h1.style.color = color;
//             console.log(color);
//             resolve("color chnage");
//         },delay);
//     });
// }

// async function show(){
//     try{
//         await changeColor("violet",1000);
//         await changeColor("indigo",1000);
//         await changeColor("blue",1000);
//         await changeColor("red",1000);
//     } catch(err){
//         console.log("error caught", err);
//     }
//     let a = 5;
//     console.log(5);
//     console.log("new number = ",a+3);
// }
// show()



// function table(num, i, delay) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${num} * ${i} = ${num * i}`);
//       resolve();
//     }, delay);
//   });
// }

// async function showTable() {
//   let num = prompt("enter the number");
//   for (let i = 1; i <= 10; i++) {
//     await table(num, i, 1000);
//   }
// }

// showTable();



// let jsonRes = '{"fact":"A female cat will be pregnant for approximately 9 weeks or between 62 and 65 days from conception to delivery.","length":110}'

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);


// let student = {
//     name:"jasim",
//     age:23,
//     marks:7.87
// };
// console.log(JSON.stringify(student))






//Our First Api request using fetch
// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     console.log(res);
//     res.json().then((data)=>{
//         console.log(data);
//     });
// })
// .catch((err)=>{
//     console.log("Error ",err)
// })



// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error ",err);
// })






// using fetch with async/wait
// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);



//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
    
//     catch (e){
//         console.log("error - ",e);
//     }
// }
// getFacts()




//Axios
// let btn = document.querySelector("button");
// let p = document.querySelector("p");


// btn.addEventListener("click",async ()=>{
//     let fact = await getFacts();
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })



// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (e){
//         console.log("error ",e);
//         return "No fact Found";
//     }
// }
// getFacts()




// let url = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () =>{
//     let link = await getImage();
//     let img = document.querySelector("#result");
//     img.setAttribute("src",link)
//     console.log(link);
// });

// async function getImage(){
//     try{
//         let res = await axios.get(url);
//         return res.data.message;
//     }catch (e){
//         console.log("error ",e)
//         return "/"
//     }
// }




const url = "https://icanhazdadjoke.com/";

async function getJokes(){
    try {
        const config = { headers:{Accept: "application/json"}};
        let res = await axios.get(url,config)
        console.log(res.data.joke);
    }catch (e){
        console.log(e);
    }
}
getJokes();




