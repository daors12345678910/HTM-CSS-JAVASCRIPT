var text="My school is the best school";
var regex=/\s/g;
document.getElementById("result").innerHTML = text.match(regex);

var text='hello helloo hellooo';
var regex=/O {3,5}/g;
document.getElementById('result')