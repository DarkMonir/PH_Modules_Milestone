
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
let price =2700;
const isLeader = false;

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

price = isLeader ===true ? 0 : price + 100;
console.log(price)



price = isLeader ===true ? 
     price > 1000 ? 
        price= price/2 : 0

    : price + 100;