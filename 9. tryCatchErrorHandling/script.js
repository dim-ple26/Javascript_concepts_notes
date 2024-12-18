let a=prompt("Enter first number")
let b=prompt("Enter second number")
if(isNaN(a) || isNaN(b)) {
    throw SyntaxError("error occured")
}
let sum = parseInt(a)+parseInt(b)
console.log("The Sum is",sum)
// if we see the output then it is not adding it is concatening

try {
    console.log("The sum is",sum*x)
} catch (error) {
    console.log("Error Occured")
}
finally {
    console.log("Always Executed")
}
// after ignoring all the functionalities of try catch and execute the finally block