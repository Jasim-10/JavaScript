// Array: An array is a special variable that can hold multiple values at once.These values are stored in an ordered list.Each value has an index starting from 0.

// let fruits = ["Apple","Banana","Mango"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


// let student = ["Asim",23,98,"Patna"];
// console.log(student);

// empty arr
// let arr = [];
// console.log(arr);



// let info = ["jasim",23,90];
// console.log(info[0]);
// console.log(info[0][0]);
// console.log(info[0][1]);
// console.log(info[0].length);
// console.log(info[1]);
// console.log(info[2]);



//Arrays are mutable.
// let fruits = ["Apple","Banana","Mango"];
// fruits[0] = "Litchi";
// console.log(fruits);

// let fruits = ["Apple","Banana","Mango"];
// fruits[7] = "Litchi";
// console.log(fruits);

// Array Method
// 1.push(): add to end
// let arr  = [1,2,3,4,5];
// arr.push(6);
// console.log(arr);

// 2. pop(): remove from end
// let arr  = [1,2,3,4,5];
// arr.pop();
// console.log(arr);


// // 3.Unshift(): add to start 
// let arr  = [1,2,3,4,5];
// arr.unshift(8);
// console.log(arr);

// 4.shift(): remove from start 
// let arr  = [1,2,3,4,5];
// arr.shift();
// console.log(arr);




// let months = ['jan','jul','march','aug'];
// months.shift();
// months.shift();
// months.unshift('june');
// months.unshift('july');
// console.log(months);



//5.indexOf():Returns the index of the first occurrence of a specified element.Returns -1 if the element is not found.
// let arr = ['red','yellow','blue'];
// console.log(arr.indexOf('yellow'));
// console.log(arr.indexOf('green'));

// 6.includes(): Returns true if the array contains the specified element, otherwise false.Use strict equality (===) for comparison.
// let arr = ['red','yellow','blue'];
// console.log(arr.includes('red'));
// console.log(arr.includes('green'));
// console.log(arr.includes('Red'));



// 7. concat(): concat() is used to merge two arrays.
// let array1 = ['A','B','C'];
// let array2 = ['Z','Y','X'];
// console.log(array1.concat(array2));


// 8. reverse(): reverse() is used to reverse an array. 
// let array1 = ['A','B','C'];
// let array2 = ['Z','Y','X'];
// console.log(array1.reverse());
// console.log(array2.reverse());


// 9.slice(): copies a portion of array
// let colors = ["red","yellow","blue","orange","pink","white"];
// console.log(colors.slice());
// console.log(colors.slice(2));
// console.log(colors.slice(2,3));
// console.log(colors.slice(-2));

// 10.splice(): splice() is used to remove/replaces/add elment in place
// let color = ["red","yellow","blue","orange","pink","white"];
// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,2));
// console.log(color);
// color.splice(0,1,"gray","violet");
// console.log(color);

// let color = ["red","yellow","blue","orange","pink","white"];
// color.splice(0,1,"gray","violet");
// console.log(color);



// 11. sort(): it is used to sort an array
// let num = [1,0,3,8,2,7,6,99,22,87,100];
// num.sort();
// console.log(num);


// let userName = ["Aasim","jasim","gulafsa","Fariza","Aasif"]
// userName.sort();
// console.log(userName);






// let month = ['january','july','march','august'];
// month.splice(0,2,"july","june");
// console.log(month);


// let lang = ['c','c++','html','javascript','python','java','c#','sql'];
// console.log(lang.reverse().indexOf('javascript'));


// Array refrences
// let num1 = [1,2,3,4];
// let num2 = [1,2,3,4];
// console.log([1]==[1]);          //false
// console.log([2]==[2]);          //false
// console.log([1,2,3,4]==[1,2,3,4]);                 //false

// let arr = [1,2,3];
// let arrCopy = arr;
// console.log([arr==arrCopy]);            //true
// arr.push(4);
// console.log([arr==arrCopy]);            //true
// console.log(arr);
// console.log(arrCopy);




// const array 
// const arr = [1, 2, 3];
// arr[0] = 99;       // allowed
// arr.push(4);       // allowed
// console.log(arr);  // [99, 2, 3, 4]
// arr = [4, 5, 6];   // TypeError: Assignment to constant variable



// Nested Array: A nested array in JavaScript is simply an array that contains other arrays as its elements.
// let num = [[1,3],[2,4],[1,7]];
// console.log(num);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(matrix[2][1]);


// let tic_tac = [["X",null,"O"],
//     [null,"X","O"],
//     ["O",null,"X"]
// ];
// console.log(tic_tac);
// tic_tac[0][1]="O";
// console.log(tic_tac);







// let arr = [7,9,0,-2]
// n = 3;
// let ans = arr.slice(0,n);
// console.log(ans)

// let arr = [7,9,0,-2,9,5]
// n = 3;
// let ans = arr.slice(arr.length-n);
// console.log(ans)


// let str = "";
// if(str.length == 0){
//     console.log("string is empty");
// }else{
//     console.log("String is not empty");
// }



// let str = prompt("Enter the character");
// if(str == str.toLowerCase()){
//     console.log("char is in lowercase");
// }else{
//     console.log("char is not in lowercase");
// }

// let str = "      abcdef     ";
// console.log(str);
// console.log(str.trim());




// let arr = [12,43,53,13,54,65,];
// let item = 43;
// if (arr.indexOf(item) != -1){
//     console.log("element exist");
// }else{
//     console.log("item not exist");
// }



