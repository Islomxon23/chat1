import React from 'react'
import '../css/nav.css'

function yarat(){
  var  div = document.getElementById('div')
  var  inp1 = document.getElementById('inp1')
  
    var div1 = document.createElement('div')
    var h1 = document.createElement('h1')
    h1.innerText = inp1.value;
    h1.style.fontSize = "15pt";
    h1.style.color = "white"

    
    div1.style.width = "30%";
    div1.style.height = "8vh";
    div1.style.background = "blue";
    div1.style.borderRadius = "10px 10px 0px 10px";
    div1.style.marginRight = "10px";
    div1.style.marginTop = "10px";
    div1.style.float = "right";
   div1.appendChild(h1)
    div.appendChild(div1)

    if(inp1.value == "salom"){
      setTimeout(function create1(){
     var  div = document.getElementById('div')
     var div2 = document.createElement('div');
     var h2 = document.createElement('h1')
     div2.style.width = "30%";
     div2.style.height = "8vh";
     div2.style.background = "blue";
     div2.style.borderRadius = "10px 10px 10px 0px";
     div2.style.marginLeft = "10px";
     div2.style.marginTop = "100px";
     div2.style.float = "left";
     h2.innerText = "Assalomu alaykum";
     h2.style.fontSize = "15pt";
     h2.style.color = "white";
     div2.appendChild(h2);
     div.appendChild(div2);
     
      }, 2000)
   }

   if(inp1.value == "yahshimisiz"){
    setTimeout(function create1(){
   var  div = document.getElementById('div')
   var div3 = document.createElement('div');
   var h2 = document.createElement('h1')
   div3.style.width = "30%";
   div3.style.height = "8vh";
   div3.style.background = "blue";
   div3.style.borderRadius = "10px 10px 10px 0px";
   div3.style.marginRight = "10px";
   div3.style.marginTop = "100px";
   div3.style.float = "left";
   h2.innerText = "yahshiman";
   h2.style.fontSize = "15pt";
   h2.style.color = "white";
   div3.appendChild(h2);
   div.appendChild(div3); 
   
    }, 2000)
 }
    
}

export default function firstpage() {
  return (
    <div className='div'>
        <div className='div1'>
            <div className='div11'>
                <h1>Chat with us!</h1>
                <i class="fa-regular fa-comments"></i>
            </div>
            <div id='div' className='div12'></div>
            <div className='div13'>
                  <input  id='inp1' type="text" placeholder='Tap "Enter" to send a message ' />
                  <button className='btn'><i class="fa-solid fa-heart"></i></button>
                  <button onClick={yarat} className='btn1'><i class="fa-solid fa-paper-plane"></i></button>
            </div>
        </div>
    </div>
  )
}
