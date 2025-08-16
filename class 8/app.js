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




