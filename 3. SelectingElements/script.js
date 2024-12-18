console.log("harryyy bhaiii")

//let bj=document.getElementsByClassName("box")
//console.log(bj)

//bj[2].style.backgroundColor="red"

//document.getElementById(red).style.backgroundColor ="red"

//document.querySelector(".box").style.backgroundColor = "green"
// it will select the first box will not apply style property
console.log(document.querySelectorAll(".box"))
// select html collection

document.querySelectorAll(".box").forEach(e=> {
    e.style.backgroundColor = "green";
})
// select the boxes and styles can be applied here with the help of for each loop

// extra methods : matches,closest,contains
