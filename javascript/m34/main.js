// function prinnt(){
//     document.write("une");
//     document.write("<br>");
//     setTimeout(function(){
//         document.write("jora");
//     }, 3000  )

//     document.write("Ti");
    
// }

// prinnt()


var colors = ['red','blue', 'purple'];

function changeBg(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];

}

setInterval(changeBg, 1000);

var names=['Reis', 'Daors','Buna','jORA']

function changeName(){

    document.querySelector('p').innerHTML=
    names[Math.floor(Math.random()*names.length)];


}

setInterval(changeName, 1000);