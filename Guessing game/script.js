const max = prompt("Enter the maximum number: ");
const random = Math.floor(Math.random()* max)+1;
let guess = prompt("Guess the number");

while(true){
    if(guess == 'quit'){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("Congrats! You are right!! random number is ",random);
        break;
    }else if(guess < random){
       guess = prompt("Your guess is small! Please try again");
    }else {
        guess = prompt("your guess is large! Please try again");
    }
}



