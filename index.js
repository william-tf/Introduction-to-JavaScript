/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = "19";
    if (votingAge >= 18) {
        console.log(true);
    } else{
        console.log(false);
    }





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let age = "22";
if(age === "22"){
    age = 'twenty two';
}else{
    age = 'of age';
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let num = Number("1999");
console.log(num);




//Task d: Write a function to multiply a*b 
function multiply(a, b){
return a * b;
}
multiply(5,5);
console.log(multiply(5,5));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
let age = 21;
let dogyears = 7;
function add(age, dogyears,){
    return age + dogyears;
}
console.log(age+dogyears);


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
function dogFeed(weight, age) {
    if(age >= 1 && weight <= 5) {
      return weight * 0.05;
    }else if(age >= 1 && weight <= 6 && weight <= 10) {
      return weight * 0.04;
    }else if(age >= 1 && weight <= 6 && weight <= 10) {
      return weight * 0.04;
    }else if(age >= 1 && weight <= 6 && weight <= 10) {
      return weight * 0.04;
    }else if(age < .75 && age >= 0.583) {
      return weight * 0.1;
    }else if(age < .5 && age >= 0.333) {
      return weight * 0.05;
    }else if(age < .33 && age >= 0.333) {
      return weight * 0.04;
    }
    
  }
  
  dogFeed(10, .05);


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
//let rock = "rock"
//let sissors = "scissors"
//let paper = "paper"
//function compChoice(){
  //  let int = math.random();
   // if (int <= 0.33){
  //      return "rock";
  //  } else if(int <= 0.66){
  //      return "scissors"
  //  } else if(int >= 0.67){
  //      return "paper"
  //  }
} 
function computerMove(){
    const cpuMove = math.floor(math.random()*3) + 1);
    if (cpuMove === 1){
        return "rock";
    }else if (cpuMove === 2){
        return "paper";
    } else {
        return "scissors";
    }
}
function RPS(userMove){
    const cpuMove1 = computerMove()
    if(userMove === "rock" && cpuMove1 === "scissors")
    console.log("You win!")
}

  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilometers = 1;
let miles = kilometers / 1.6;
console.log(miles);




//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
let feet = 3;
let centimeters = feet * 30.48;
console.log(centimeters);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  function annoyingSong(){
let bottles;
let bottlesRemaining;
for (i=99; i >= 1; i--){
    if(i == 1){
        bottles="bottle";
        bottlesRemaining ="No bottles of beer on the wall";
    }else {
        bottles = "bottles"
        bottlesRemaining= i - 1 + "bottles of beer on the wall";
    }

    }
}




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  function grades(){
      if(grades >= 90){
      return "A";
  }else if(grades >= 80 && grades <= 89){
      return "B";
  }else if(grades >= 70 && grades <= 79){
      return "C";
  }else if(grades >= 60 && grades <= 69 ){
      return "D";
  }else if(grades <= 59 ){
      return "F";
  }
}
grades(3)

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





/*let age= 1;
let weight= 15;
function dogFeed(age, weight){
    if (age >= 1 && weight <=5){
        return weight* age * 0.05;
    }
        else if (age >=1 && weight >= 6 && weight <= 10){
            return weight * 0.04;
        }
        else if(age >=1 && weight >= 11 && weight <= 15){
            return weight * 0.03;
        }else if(age >=1 && weight > 15)
        return weight * 0.02;
    } else if(age < 1 && weight <=){

    }
}

dogFeed(1, 10);*/ 