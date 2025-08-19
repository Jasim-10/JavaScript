// let btn = document.querySelector('button');
// console.dir(btn);
// // btn.onclick = function (){
// //     console.log("button was click");
// // };

// let sayHello = (()=>{
//     alert("hello");
// });
// btn.onclick = sayHello;


// let btns = document.querySelectorAll("button");
// for (btn of btns){
//     btn.onclick = sayHello;
// }
// function sayHello(){
//     console.log("button clicked");
// };


// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.onmouseenter = sayHi;
// }
// function sayHi(){
//     console.log("Mouse is enter");
// }


// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("mouseenter",sayHi);
// }
// function sayHello(){
//     console.log("button clicked");
// };
// function sayHi(){
//     console.log("Mouse is enter");
// }



// let btn = document.querySelector("button");
// btn.addEventListener("click", function(){
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

// });
// function getRandomColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


// let para = document.querySelector('p');
// para.addEventListener("click", function(){
//     console.log("para was click");
// })


// let div = document.querySelector("div");
// div.addEventListener("click",function(){
//    div.style.backgroundColor = "blue";
//    div.style.width = "100px"
// })


// let btn1 =document.querySelector('#btn1');
// let btn2 =document.querySelector('#btn2');
// btn1.addEventListener("click", sayHello);
// btn2.addEventListener("click", sayHello);

// function sayHello() {
//   console.log(this);          // refers to the button that was clicked
//   console.log(this.innerText); // prints text of that button
// }


// let btn1 =document.querySelector('#btn1');
// btn1.addEventListener("click",function (){
//     console.log(this);
//     this.style.backgroundColor = "red";
// })




// let btn = document.querySelector("button");
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("Button clicked");
// });


// let btn = document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button clicked");
// });


// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log('key was pressed');
// })


// let inp = document.querySelector("input");
// inp.addEventListener("keyup",function(){
//     console.log('key was released');
// })



// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     console.log("form submitted");
// });


// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
    

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#password");

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is ${pass.value}`);
// });


// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();

//     let user = this.elements[0];
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);
    
//     alert(`Hi ${user.value}, your password is ${pass.value}`);
// });




// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("change",function(){
//     console.log("input changed");
//     console.log("final value = ",this.value);
// });


// let form = document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");
// user.addEventListener("input",function(){
//     console.log("input event");
//     console.log("final value = ",this.value);
// });




let inp = document.querySelector('input');
let para = document.querySelector('p');
inp.addEventListener("input",function(){
    console.log(inp.value);
    para.innerText = inp.value;
});
