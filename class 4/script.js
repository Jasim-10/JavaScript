// loop: used to iterate

// for loop: Runs a block of code a specific number of times.

// for (let i=1; i<=5; i++){
//     console.log(i);
// }

// for (let i=10; i>=1;i--){
//     console.log(i);
// }


//print odd number
// for (let i=1; i<=15;i+=2){
//     console.log(i);
// }

// let n = prompt("enter the number:");
// for (let i=1; i<=n;i+=2){
//     console.log(i);
// }


//print even number
// for (let i=2; i<=10;i+=2){
//     console.log(i);
// }

// let n = prompt("enter the number:");
// for (let i=2; i<=n;i+=2){
//     console.log(i);
// }


//multiplication of table of 5
// let num = 5;
// for(let i=1;i<=10;i++){
//     console.log(`5 * ${i} = ${num*i}`);
// }

//multiplication of table of n
// let num = prompt("enter the number");
// for(let i=1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }



//nested loop
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }





// While loop: Runs while a condition is true.
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++;
// }


// multiplication of 7
// let n = 7;
// let i = 1;
// while(i<=10){
//     console.log(7*i);
//     i++;
// }


// const fav_movie = "avatar";
// let userGuess = prompt("enter the movie name").toLowerCase();
// while((userGuess != fav_movie) && (userGuess != "quit")){
//     userGuess = prompt("Wrong guess! Please try again....").toLowerCase();
// }
// if (userGuess == fav_movie){
//     console.log("congratulations! Your Guess is Right...")
// }else {
//     console.log('You Quit');
// }



// let fruits = ["mango","apple","banana","litchi","orange"];
// for (let i = 0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }



// let heroes = [
//     ["ironman","spiderman","thor"],["superman","batman","flash"]
// ];
// for (let i=0;i<heroes.length;i++){
//     console.log(`list #${i}`);
//     for (let j=0; j<heroes[i].length0;j++){
//         console.log(heroes[i][j]);
//     }
// }




// for of loop: he for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.It gives you the values directly, not the indexes
// let fruits = ["Apple","Banana","Mango"];
// for (fruit of fruits) {
//     console.log(fruit);
// }


// for (char of "apnacollge"){
//     console.log(char);
// }



let heroes = [
    ["ironman","spiderman","thor"],["superman","batman","flash"]
];
for (list of heroes){
    console.log(list)
}



// let heroes = [
//     ["ironman","spiderman","thor"],["superman","batman","flash"]
// ];
// for (list of heroes){
//     for (name_hero of list){
//         console.log(name_hero);
//     }
// }




