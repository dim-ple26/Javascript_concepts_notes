let button = document.getElementById("btn")
// we can get a lot of events by browsing

button.addEventListener("click",()=>{
   // alert("I Was Clicked")
   document.querySelector(".box").innerHTML = "<b>Yayyy u were clicked</b> enjoyyyy"
})
button.addEventListener("contextmenu",()=>{
    alert("right Clicked")
    
 })

 button.addEventListener("keydown",(e)=>{
    console.log(e)
    
 })

 // EXPLORE ALL OTHER EVENTS BY BROWSING