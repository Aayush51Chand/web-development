// let a = 23
// let b = 20
// console.log(a+b)
// function sum(x, y)
// {
//     console.log("the sum of the number:")
//     let add = x + y
//     return add;
// }
// let result = sum(a, b)
// console.log(result)



// function to add number from 1 to 10 using for loop in function with out passing arguments and parameter




// function loop()
// {
//     let sum = 0;
//     for(let x = 1; x <= 10; x++)
//     {
//       sum += x;
//       console.log("the sum of the given number is given below:")  
//     }
//     return sum;
// }
// let a = loop()
// console.log("the value is: "+a)


// using function with for loop by passing arguments and parameter
// to add numbers

// let a = prompt("enter a number to find sum from");
// let b = prompt("enter num up to find sum");
let a = 1
let b = 15
function sum(x, y)
{
    let sum = 0
for(let i = x; i <= y; i++)
    {
sum += i;
    }
    return sum;
}
console.log(sum(a, b))