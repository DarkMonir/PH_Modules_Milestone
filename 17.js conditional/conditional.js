
/**
 * > , < , == , >= , <= , != 
 * 
 * && , || 
 */

// console.log(5>10);
// console.log(5==10);
// console.log(5>=10);
// console.log(5<=10);

// if(13 < 10){
//     console.log('I have a smaller value')
// }
// else{
//     console.log('I have a bigger value')
// }


// var biryaniPrice = 250;

// if(biryaniPrice < 300){
//     console.log("mama give me biryani")
// }

// const salary = 21000;
// const isBcs = true;
// const height = 66;

// if(salary >22000 && height >= 66){
//     console.log('su....patro')
// }
// else{
//     console.log('onno patro dakho')
// }

// if(salary>=25000 || height>72 || isBcs==true){
//     console.log('eso baba kobul')
// }
// else{
//     console.log('vaag tui moknul')
// }

//----------------complex condition--------------------------
// const age =62
// let price =2700;
// const isLeader = false;

// if(price>= 5000){
//     // 10% discount
//     const disPrice =price *10 / 100;
//     const finalPrice = price - disPrice;
//     console.log(finalPrice)
// }
// else if(price > 2500){
//     // 5%discount
//     const disPrice =price * 5 / 100;
//     const finalPrice = price - disPrice;
//     console.log(finalPrice)
// }
// else{
//     console.log(price);
// }

// if(isLeader===true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }

// price = isLeader ===true ? 0 : price + 100;
// console.log(price)



// price = isLeader ===true ? 
//      price > 1000 ? 
//         price= price/2 : 0

//     : price + 100;


    // let score = 75;
    // let grade;
    // if (score >= 90) {
    //   grade = "A";
    // } else if (score >= 80) {
    //   grade = "B";
    // }
    // console.log(grade);


    // -----------------Exercise 1 -----------------------------

// let burger = prompt('how much is a burger?')
// let burger = 501;

// if(burger > 500){
//   console.log('Congratulation you can have youe coke for free')

// }
// else{
//   console.log('You have to add 30tk for your coke!')
// }

 // -----------------Exercise 2 -----------------------------


//  const weight = 64;
//  const height = 1.6764;

//  const BMI = weight / (height ** 2);
 
//  if (BMI < 18.5){
//   console.log('You are underweight')
//  }
//  else if(BMI >= 18.5 && BMI <= 24.9){
//   console.log('You are normal')
//  }  
//  else if(BMI >= 25 && BMI <= 29.9){
//   console.log('You are overweight')
//  }   
//  else{
//   console.log('You are obese')
//  }

 // -----------------Exercise 3 -----------------------------

// const grade = 90;

// if(grade >=90 && grade <=100){
//   console.log('You got an A')
// }
// else if(grade >=80 && grade <=89){
//   console.log('You got a B')
// }
// else if(grade >=70 && grade <=79){
//   console.log('You got a C')
// }
// else if(grade >=60 && grade <=69){
//   console.log('You got a D')
// }
// else{
//   console.log('You got a F')
// }


// -----------------Exercise 4 -----------------------------

// const myScore = 80;
// const fdScore = 39;

// if(myScore> 80 && myScore<= 100){
//   if(fdScore>=80){
//     console.log('Lets go for a lunch')
//   }
//   else if (fdScore<80 && fdScore >= 60){
//     console.log('Good luck next time')
//   }
//   else if (fdScore<60 && fdScore >= 40){
//     console.log('keep your friends message unseen.')
//   }
//   else{
//     console.log('Block your friend')
//   }
// }
// else{
//   console.log('go to home and sleep and act sad')
// }

// -----------------Exercise 5 -----------------------------

// const num1 = 10;
// const num2 = 18;
// let result;

// if(num1> num2){
//   result = 2* num1;
//   console.log(result)
// }
// else{
//   result = num1 + num2;
//   console.log(result)
// }

// result = num1 > num2 ? num1 *2 : num1+num2;
// console.log(result)


// -----------------Exercise 6 -----------------------------

// const age = 4;
// const student = true;

// if (age<10){
//   console.log('Its free ')
// }
// else if(age>=10 && age <= 25 && student){

//   console.log("Get a 50% discount")
// }
// else if(age>=60){
//   console.log("Get a 15% discount")
// }
// else{
//   console.log('Regular ticket fare 800 tk')
// }



// //////////////////////////////////////////////////////////

// const ps = require("prompt-sync");
// const prompt = ps();
// const prompt= require("prompt-sync")({sigint:true}); 



const prompt = require('prompt-sync')();

let grades = [];

while (true) {
  let marks = prompt('add a grade: ');

  if (marks === null) {
    break;
  }

  grades.push(Number(marks));
  console.log(grades);
}


let count = 0;
let total = 0;

for(let i = 0; i < grades.length;i++){
  count++;
  total += grades[i];
}

let avg = total / count;
console.log(avg);
