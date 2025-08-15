// function hello(){
//     console.log("hello");
// }
// hello();


// function printName() {
//     console.log("Jasim");
//     console.log("Ansari");
// }
// printName();


// function table(){
//     let num = prompt("Enter the number");
//     for (let i=1;i<=10;i++){
//         console.log(`${num}*${i}=${num*i}`);
//     }
// }
// table();


// function isAdult(){
//     let age = 19;
//     if (age>=18){
//         console.log("adult");
//     }else {
//         console.log("not adult");
//     }
// }
// isAdult();



// function dice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// dice();



// function with argument
// function printName(name){
//     console.log(name);
// }
// printName("jasim");


// function mul(a,b){
//         console.log(a*b);
// }
// mul(5,5);


// function table(num){
//     for (let i=1;i<=10;i++){
//         console.log(num*i);
//     }
// }
// table(5);




// function table(num){
//     for (let i=1;i<=10;i++){
//         console.log(num*i);
//     }
// }
// let num = prompt("Enter the number");
// table(num);


// function average(a,b,c){
//     let average = (a+b+c)/3;
//     console.log(average);
// }
// average(3,5,7);


// function sum(a,b){
//     return a+b;
// }
// let add = sum(3,4)
// console.log(add);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(4,5));


// function isAdult(age){
//     if(age >= 18){
//         return "adult";
//     }else{
//         return "not adult";
//     }
// }
// console.log(isAdult(18));
// console.log(isAdult(17));



// function sum(n){
//     let num = 0;
//     for (let i=1;i<=n;i++){
//         num+=i;
//     }
//     return num;
// }
// console.log(sum(10));



// function fact(n){
//     let num = 1;
//     for (let i=1;i<=n;i++){
//         num*=i;
//     }
//     return num;
// }
// console.log(fact(5));



// let str = ["abc","defg","hij","pqr"];
// function concat(str){
//     let result = "";
//     for (let i=0;i<str.length;i++){
//         result += str[i]
//     }
//     return result;
// }
// console.log(concat(str));




// let greet = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();




//functiom exression
// let greet  = function(name){
//     return name;
// }
// console.log(greet("Jasim"));



//High order function: Higher-Order Function (HOF) in JavaScript is a function that does at least one of the following:1.Takes another function as an argument.2.Returns another function as its result.

// function multipleGreet(func,n){
//     for(let i=1;i<=n;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log("hello");
// }
// multipleGreet(greet,2);


// function oddEvenTest(request) {
//     if (request == "odd") {
//         return function(n) {
//             console.log(!(n % 2 == 0)); 
//         };
//     } else if (request == "even") {
//         return function(n) {
//             console.log(n % 2 == 0);
//         };
//     } else {
//         console.log("wrong request");
//     }
// }
// let request = "even";
// let testFunc = oddEvenTest(request);
// testFunc(5);
// testFunc(8);




// Method: Action that perform on an object

// const cal = {
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
// };
// console.log(cal.add(5, 3));
// console.log(cal.sub(10, 4));
// console.log(cal.mul(7, 6));




