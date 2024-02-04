
// const language = ['HTML', 'CSS', 'JavaScript', 'PHP', true, 50]

// language[4] = 'Tailwind CSS';
// language[5] = 'react.js';
// language[6] = 'vue.js';
// language[7] = 'laravel';
// language[10] = 'Bootstrap';

// console.log(language[language.length - 1]);

// console.log(language)
// console.log(language.toString())

// const numbers = [1, 5, 66, 11, 45, 65]
// console.log(numbers.length)
// console.log(numbers)

// get element  value by index

// console.log(numbers[4]) 

// const forth = numbers[4]
// console.log(forth) 

// set or update element value by index

// let abc = 45;

// abc = 99;

// numbers[1] = 999;
// console.log(numbers)


// const ages = [];

/////////////        Push, Pop ///////    shift unshift /////// 

// numbers.push(88) 
// console.log(numbers)
// numbers.pop()
// let num = numbers.pop()
// console.log(num) 

// numbers.shift()
// console.log(numbers)
// numbers.unshift(800)
// console.log(numbers)


// const friends = ['balam', 'kalam', 'chailam', 'gelam', 'pailam']

// console.log(friends.includes('gelam')) // CASE SENCITIVE
// console.log(friends.includes('khailam'))

// if(friends.includes('gelam')){
//     console.log('Party')
// }
// else {
//     console.log('fasting')
// }


// console.log(friends.indexOf('gelam'))
// console.log(friends.indexOf('tomato')) // nai array te tai -1 ashbe


//  is this an array?

// const nums = []

// const food = 'ros o gol l a';
// const age = 15;

// console.log(Array.isArray(friends))
// console.log(Array.isArray(nums))
// console.log(Array.isArray(food))
// console.log(Array.isArray(age))

/// ////    Declare an array
// const fruits = ['apple', 'banana', 'mango', 'olive', 'orange']

// console.log(fruits[3])

// fruits[2] = 'jambura';
// console.log(fruits)

/////////////          add or remove elements

// const destination = ['cox-bazar', 'rangamati', 'syllet']

// destination.push('hwaii')
// destination.push('ami', 'jami')
// destination.pop()
// console.log(destination)


///   includes

// const books = ['atomic habits', 'javascript', 'physics', 'chemistry']

// console.log(books.includes('javascript'))

/////////   concat

// const money =['22', '44', '77', '99']
// const friends = ['balam', 'kalam', 'chailam', 'gelam', 'pailam']

// console.log(money)
// console.log(friends)

// console.log(money.concat(friends))



// const friends = ['Elon', 'Bill', 'Mark', 'Waren'];

// for(const friend of friends){
//     console.log(friend);
// }

// for(let i = 0; i < friends.length; i++){
//     console.log(i);
//     console.log(friends[i])
// }

//              [9, 8, 7, 6, 5, 4, 3, 2, 1]
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers);

// const reversed = numbers.reverse();

// console.log(reversed);


// const rev_numbers = [];

// for(const num of numbers){

//     rev_numbers.unshift(num)
// }
// console.log(rev_numbers)


const reverse_numbers = [];
for(let i = 0; i < numbers.length; i++){
    const num = numbers[i];
    reverse_numbers.unshift(num);
}
console.log(reverse_numbers)



// reverse side
const rev_reverse_numbers =[]
for(let i = numbers.length -1 ; i <= 0; i++){
    const num = numbers[i];
    // reverse_numbers.shift(num);
    console.log(num);
    rev_reverse_numbers.push(num);
}
console.log(rev_reverse_numbers)