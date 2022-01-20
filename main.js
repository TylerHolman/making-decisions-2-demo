
let backpack = []; //empty array

backpack.push(`Sword`) ;
backpack.push(`Shield`) ;
backpack.push(`food`) ;

//backpack.shift() removes the sword
backpack.splice(0, 1) //removes the sword

let furCoat = `fur coat`;

backpack.push(furCoat);//add furCoat variable to the array backpack
backpack.pop();//removes the fur coat

let itemCount = backpack.length; //this assigns itemCount to length of variable backpack

backpack.push(`flint`, `blanket`, `knife`, `toothbrush`);//adds all 4 data to backpack

let backpack2 = backpack.splice(3, 3); //starts at index 3 and adds 3 data points to backpack2

// for (let i = 0; i < backpack.length; i++){ // let (variable; index; add)
//   console.log(`this is an iteration of our loop, and this is the current element of the array`, backpack[i]) 
// }

// for(let i = 0; i <= backpack2.length - 1; i++)[
//   console.log(backpack2[i])
// ]
//console.log(`backpack1`, backpack, `backpack2`, backpack2);//add a string `backpack1` will name the array in terminal

// backpack.push(`hat`)
backpack.pop()

// for (let i = 0; i < 3; i++){
//   console.log(backpack[i])
// }

// if (backpack.length >= 3){
//   for (let i = 0; i < 3; i++){
//     console.log(backpack[i])
//   }
// }else{
//   for(let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
//   }
// }

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {;
  console.log(`---------`, guessMe);
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {;
      console.log(`guessMe is divisible by 4 or 5. Added 25`);
        guessMe += 25
    } else if (guessMe % 3 == 0) {;
      console.log(`guessMe is divisible by 3. Subtracted 27`);
        guessMe -= 27;
    } else {
      console.log(`hit else, added 3`);
        guessMe += 3;
    }
    guessMe += 22;
    console.log(`Added 22, guessMe is now: ${guessMe}`);
}

console.log(`final value:`, guessMe);