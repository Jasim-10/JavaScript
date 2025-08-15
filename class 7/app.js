// const person = {
//     name: "Jasim",
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// person.greet();

// const student = {
//     name: "Jasim",
//     age:22,
//     eng:80,
//     math:82,
//     phy:75,
//     getAvg(){
//         let avg = (this.eng + this.math + this.phy)/3;
//         console.log(avg);
//     }
// }
// student.getAvg();




// let a = 10;
// try {
//     console.log(a);
// } catch {
//     console.log("doesn't assign variable");

// }


// try {
//     let x = y + 5;
//     console.log(x);
// } catch (err) {
//     console.log("An error occurred: ");
// }


// Arrow Function
// const sum = (a,b) => {
//     console.log(a+b);
// }
// sum(3,5);




// const cube = (a) =>{
//     return a*a*a;
// };
// console.log(cube(6));



// setTimeout: setTimeout in JavaScript is used to run code after a delay (only once).
// console.log("Hi");
// setTimeout(() => {
//     console.log("Hello after 3 seconds");
// }, 3000);
// console.log("welocme");





// setInterval: setInterval in JavaScript is used to run code repeatedly at a fixed time interval.
// setInterval(() => {
//     console.log("This prints every 2 seconds");
// }, 2000);


// console.log("Hi");
// setInterval(() => {
//     console.log("Hello after 3 seconds");
// }, 3000);
// console.log("welocme");




// let counter = 0;
// let timerId = setInterval(() => {
//     counter++;
//     console.log("hello");
//     if (counter === 5) {
//         clearInterval(timerId);
//     }
// }, 2000);


// let square = (n) => {
//     return n*n;
// }
// let num = prompt("enter the number");
// console.log(square(num));


// let counter = 0;
// let timerId = setInterval (() =>{
//     counter++;
//     console.log("Hello World");
//     if(counter === 5){
//         clearInterval(timerId);
//     }
// }, 2000);



// let id = setInterval(()=>{
//     console.log("Hello world");
// }, 2000);
// setTimeout(()=>{
//     clearInterval(id);
//     console.log("timeout")
// }, 10000);



