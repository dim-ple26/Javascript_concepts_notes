// about Query Selector
// document.querySelector(".box")
// <div class=​"box">​ Hey i am a box​</div>​

// document.querySelector(".box").innerHTML
// ' Hey i am a box'

// document.querySelector(".container").innerHTML
// '\n        <div class="box"> Hey i am a box</div>\n    '

// document.querySelector(".container").innerText
// 'Hey i am a box'

// document.querySelector(".box").innerText
// 'Hey i am a box'

// document.querySelector(".container ").innerText
// if there are two boxes then all the text inside that box we will get here.

// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box"> Hey i am a box</div>\n        <div class="box"> hey i am second box</div>\n    </div>'
// document.querySelector(".container").tagName
// 'DIV'
// document.querySelector(".container").nodeName
// 'DIV'
// document.querySelector(".container").textContent
// '\n         Hey i am a box\n         hey i am second box\n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden = true
// true
// document.querySelector(".box").innerHTML = " hey I am dimple"
// ' hey I am dimple'




// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// document.querySelector(".box").setAttribute("style","display : inline")
// undefined

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}

// document.querySelector(".box").removeAttribute("style")
// undefined

// -------------------------------
//REMOVING AND CLASSLIST AND TOGGLE

document.querySelector(".box").remove()
// box first wala remove hote jayga

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bggreen', value: 'container red bggreen']

//document.querySelector(".container").classList.add("dimpsss")
//document.querySelector(".container").classList.remove("red")

//toggle means if it is open then close it OR id it is close then open it
//document.querySelector(".container").classList.toggle("dimpsss")

//document.querySelector(".container").classList.toggle("redblue")
//true
//document.querySelector(".container").classList.toggle("redblue")
//false