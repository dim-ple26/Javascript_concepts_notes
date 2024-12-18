let prom1= new Promise((resolve,reject)=> {
    let a = Math.random();
    if (a < 0.5){
        reject("no random no was supporting you")
    }
    else{
    setTimeout(()=> {
        console.log("Yes I am donee")
        resolve("Dimple") // work finish
    },3000);
}
})

let prom2= new Promise((resolve,reject)=> {
    let a = Math.random();
    if (a < 0.5){
        reject("no random no was supporting you 2")
    }
    else{
    setTimeout(()=> {
        console.log("Yes I am donee2")
        resolve("Dimple") // work finish
    },3000);
}
})

// then and catch are consumers
// prom1.then((a)=>{
//     console.log(a)
// }).catch((err)=> {
//     console.log("no error")
// })

let p3 = Promise.all([prom1,prom2])
p3.then((a)=> {
    console.log(a)
 }).catch((err)=> {
     console.log("no error")
 })


// either a request is resolves or rejected