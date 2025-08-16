//  Array Method: 
// 1. forEach(): It goes through each item, but doesnot return anything.

// let num = [1,2,3,4];
// function print(el){
//     console.log(el);
// };
// num.forEach(print);



// let arr = [{
//     name:"jasim",
//     roll: 10
// },{
//     name:"aman",
//     roll: 11
// },{
//     name:"pawan",
//     roll:12
// }];
// arr.forEach((student)=>{
//     console.log(student.roll)
// })



// 2. map(): It changes every item and returns a new array.
// let num = [1,2,3];
// let double = num.map((n) =>{
//     return n*2;
// });
// console.log(double);



// let arr = [{
//     name:"jasim",
//     mark: 70
// },{
//     name:"aman",
//     mark: 72
// },{
//     name:"pawan",
//     mark: 80
// }];
// let gpa = arr.map((el)=>{
//     return el.mark/10;
// });
// console.log(gpa)




// 3. filter():It selects items that pass a condition.
// let numbers = [1,2,3,4,5];
// let even = numbers.filter(n => n%2===0);
// console.log(even);


// let numbers = [1,2,3,4,5];
// let odd = numbers.filter(n => n%2!==0);
// console.log(odd);


// let numbers = [1,2,3,4,5];
// let even = numbers.filter(n => n%2===0);
// console.log(even);
// setTimeout(()=>{
//     let odd = numbers.filter(n => n%2!==0);
//     console.log(odd);
// },4000);





// 4.some():If at least one item passes, it returns true.
// let numbers = [1,3,5];
// console.log(numbers.some(n => n>4));


// 5.every(): If all items pass, it returns true.
// let numbers = [2,4,6];
// console.log(numbers.every(n => n%2===0));





// 6. reduce(): It combines all items into one value.
// let numbers = [1,2,3,4];
// let sum = numbers.reduce((a,b)=>a+b,0);
// console.log(sum);


// let numbers = [1,2,3,4];
// let mul = numbers.reduce((a,b)=>a*b,1);
// console.log(mul);


// let arr = [16,32,54,13,15,64,77,43];

// let maximumValue = arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else {
//         return max;
//     }
// });
// console.log(maximumValue)


// let arr = [16,32,54,13,15,64,77,43];

// let minimumValue = arr.reduce((min,el)=>{
//     if(min<el){
//         return min;
//     }else {
//         return el;
//     }
// });
// console.log(minimumValue)


// let arr = [10,20,60,50];

// let multipleOfTen = arr.every((n) => {
//     return n%10 ==0;
// });
// console.log(multipleOfTen)



//Default Parameter:If you don’t give a value when calling a function, the function will use a default value.
// function greet(name = "Guest") {
//     console.log(name);
// }
// greet("Jasim");  // Jasim
// greet();         // Guest  (default used)


// function add(a = 5, b = 10) {
//     return a + b;
// }
// console.log(add(2, 3)); // 5   (2+3)
// console.log(add(7));    // 17  (7+10)
// console.log(add());     // 15  (5+10)


// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // 5   (2+3)
// console.log(add(7));    //NAN
// console.log(add());     //NAN





// Spread:The spread operator (...) is used to expand (spread out) elements of an array, string, or object.
// let arr = [1, 2, 3];
// console.log(...arr);  


// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let combined = [...arr1, ...arr2];
// console.log(combined);


// let obj1 = {name: "Jasim"};
// let obj2 = {age: 22};
// let person = {...obj1, ...obj2};
// console.log(person);  


// function add(a, b, c) {
//   return a + b + c;
// }
// let nums = [1, 2, 3];
// console.log(add(...nums));



// let arr=[19,42,46,13,57];
// let min = Math.min(...arr);
// console.log(min);


// let cart = ["Shoes", "Shirt"];
// let updatedCart = [...cart, "Jeans"];
// console.log(updatedCart);

// let customer = {name: "Jasim", age: 22};
// let address = {city: "Mohali", country: "India"};
// let customerProfile = {...customer, ...address};
// console.log(customerProfile);




// Rest parameter is used to take multiple arguments in a function and put them into an array.It is written as ...name.
// function add(...numbers) {
//     let sum = 0;
//     for (let num of numbers) {
//         sum += num;
//     }
//     return sum;
// }
// console.log(add(2, 3));        
// console.log(add(2, 3, 4));     
// console.log(add(1, 2, 3, 4)); 


// function intro(firstName, lastName, ...hobbies) {
//     console.log("Name:", firstName, lastName);
//     console.log("Hobbies:", hobbies);
// }
// intro("Jasim", "Ansari", "Coding", "Traveling", "Kabaddi");



// function sum(...args) {
//     return args.reduce((sum,el)=>sum+el);
// }
// console.log(sum(1.5,4,2));




// Destructuring: Destructuring means unpacking values from arrays or objects into separate variables.
// let numbers = [10, 20, 30, 40];
// let [x, y, z,p] = numbers;
// console.log(x,y,z,p);


// let person = {
//     person_name: "Jasim",
//     age: 22,
//     city: "Mohali"
// };
// let {person_name, age, city} = person;
// console.log(person_name,age,city);



// let arr = [100, 200, 300, 400];
// let [first, , third] = arr;
// console.log(first,third);


// let arr = [5];
// let [p, q = 20] = arr;
// console.log(p,q); 



// let user = {
//     id: 1,
//     info: {
//         username: "Afjal",
//         email: "afjal@gmail.com",
//         age:20,
//         marks:7.7
//     }
// };

// let {info: {username, email}} = user;
// console.log(username,email);



// let alphabet = ['a','b','c','d','e','f'];
// let [first,second,...others]=alphabet;
// console.log(others);
// console.log(first);
// console.log(second);




// let user = {
//     username: "Afjal",
//     email: "afjal@gmail.com",
//     age:20,
//     marks:7.7
// };

// let {username, email, city="bhopal"} = user;
// console.log(username,email,city);
