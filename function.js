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

function loop()
{
    let sum = 0;
    for(let x = 1; x <= 10; x++)
    {
      sum += x;
      console.log("the sum of the given number is given below:")  
    }
    return sum;
}
let a = loop()
console.log("the value is: "+a)