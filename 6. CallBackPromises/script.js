//JS is asynchronous in nature
console.log("I am a HAckerr")
console.log("My Brother is a hecker")

setTimeout(()=> {
    console.log("I am inside setTimeout")
},2000);
// run after 2 seconds

console.log("The End")

// Callback function is a function passed into another function as an argument which is then invoked inside the outer function to complete one action

const callback=(arg)=> {
    console.log(arg)
}
const loadScript = (src,callback) => {
    let sc = document.createElement("script")
    sc.src=src;
    sc.onload=callback("Dimple");
    document.head.append(sc)

}
loadScript(src,callback)

// again and again callback will create a pyramid of loop that will look like a callback hell