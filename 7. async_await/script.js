// async await is a special syntax to work with promise in JS
// async always returns a promise , other values are wrapped in a promise automatically
// async ensures that the function returns a promise and wraps non promises in it

// async function getData(){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             resolve(455)
//         },3500);
//     })
// }

async function getData() {

let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
let data = await x.json() // parsing into json
// console.log(x)
// return 455
return data
}


async function main() {
    

console.log("Loading modules")
console.log("Do something else")
console.log("load Data")


let data = await getData()
// data.then((v)=> {
//     console.log(data)
//     //Promise { <pending> }
    
//     console.log("Process data")
//     console.log("task 2")    
  
// }) CALLBACK APPROACH



console.log(data)
//Promise { <pending> }

console.log("Process data")
console.log("task 2")
}
main()