 

 function showMessage(){
            console.log("Declaration function")
        }
       
        var showMessage2 = function(){
            console.log('Expression function')
        }
showMessage()
showMessage2()
var headingElement = document.querySelector('h1')
headingElement.id = "Heading"
//headingElement.setAttribute('class','head')
console.log(headingElement.getAttribute('class'))

// Event listener
///1. DOM event
var btn = document.getElementById('btn');

btn.onclick = function(){
    console.log('Ciec 1')
    console.log('Viec 2')
}

setTimeout(function(){
    btn.onclick = function (){}
},3000)

// 2. event listener
btn.addEventListener('click',viec3)
setTimeout(function(){
    btn.removeEventListener('click', viec1)
},3000)