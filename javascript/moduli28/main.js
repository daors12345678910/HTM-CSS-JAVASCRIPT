var button1 = document.querySelector("#button1");


button1.onclick = function(){
    alert('helloooo');
}


var button2=document.querySelector("#button2");


var button3=document.querySelector("#button3");


var button4=document.querySelector("#button4");


var button5=document.querySelector("#button5");


button2.addEventListener('click', function(){
    alert('button 222')
});


button3.onmouseover = function(){
    alert("Mouse over");
}


button4.onmouseleave=function(){
    alert("On Mouse Leave")
}


button5.onmousewheel=function(){
    alert("On Mouse Leave")
}


var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var text=document.getElementById("txt1")
var tx2=document.querySelector('#txt2')


btn1.onclick=function(){
    text.style.color="red";
    text.style.backgroundColor="blue";
    text.style.textAlign='center';
   tx2.setAttribute("class", "txt2")
}

btn2.onclick=function(){

    tx2.setAttribute('class', 'tx1');
  
}