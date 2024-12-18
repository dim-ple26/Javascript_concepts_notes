console.log("hello world");

//document.body.firstElementChild  and this is our container element inside body
// {/* <div class=​"container">​…​</div>​
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] we will get text here

// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box] */} but here we will get the children not the text nodes

//document.body.firstElementChild.children[0]  box1
//ocument.body.firstElementChild.children[1]  box2
//ocument.body.firstElementChild.children[1].nextElementSibling,previouselementsibling,previoussibling