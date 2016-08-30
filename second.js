// import test from 'ava';
//Function takes objects in an array
//and filters them based upon two variables
//
/**
 * 1. write a function that determines identifies criteria
 * if both are meet return true
 * 2. pass this function and the array of foods into filter
@param {array} foods - an array of foods
@param {object} name, vegetarian, glutenFree
@returns {boolean} gf and veg items
 */

let foods = [
  { name: 'Toaster Streudel', vegetarian: true, glutenFree: false },
  { name: 'Chicken salad', vegetarian: false, glutenFree: true },
  { name: 'Coffee cake', vegetarian: true, glutenFree: true }
];

let x = foods.filter(test);
let y = x.map(mapstuff)
// [{}, {}, {}]

function test(object){
   if(object.vegetarian && object.glutenFree === true){
       return true;
   }else{
       return false;
   }
}
function mapstuff(x){
return x.name;
}
console.log(y);

let products = [
   { name: 'Soap dispenser', price: 12.45, inStock: true },
   { name: 'Chainsaw blade', price: 41.45, inStock: true },
   { name: 'Bath towel warmer', price: 87.14, inStock: false },
];



// let g = products.filter(stuff);

// let j = g.map(smoosh);


// function stuff(products){
//    if(products.inStock === true){
//        return true;
//    }else{
//        return false;
//    }
// }

// function smoosh(x){
//    let y = x.name + ' ' + x.price;
//    return y;

// }
// console.log(j)


let input = 153;

// x = numbers.split / array of numbers 
// then write function that powers those individual numbers by the length 
// of the array.

let g = split(input).map(tonumber).map(power).reduce(getSum, 0);

if (g === input){
    g = true;
}

function split(input){
   let x = input.toString();
   return x.split('');
}

function tonumber(x){
   let y = Number(x);
   return y;
}

function power(k){
   return Math.pow(k, split(input).length);
}

function getSum(snowball, snowflake){
return snowball + snowflake;

}


console.log(g);

