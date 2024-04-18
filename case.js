const isEven = (randNum)=> randNum % 2 === 0;



 
let randNum  = Math.floor(Math.random() * 1000)  + 1 ; 
let currentYear = new Date().getFullYear() 
const isGreaterThanYear =(num, currentYear) => num > currentYear

console.log(`the year ${currentYear} is ${isGreaterThanYear(randNum, currentYear) ?'less' : 'more'} then the random number ${randNum}`)  

switch(true){
    case isGreaterThanYear(randNum, currentYear): //true or false
        console.log('greater than year')//if true (is even) then brea
    case isEven(randNum):// if even then true
        console.log('even')
    default:// otherwise (if odd && smaller than year) outpt the following
        console.log('none of the above') 
}

let x = 4;

