var slides=document.getElementsByClassName('slider');
var sliderIndex=0;

function showSlide(i){
    sliderIndex=(i + slides.length)%slides.length;

    for(let s of slides)s.style.display = "none";
    slides[sliderIndex].style.display = "block";
}

showSlide(0);

setInterval(()=>showSlide(sliderIndex+1), 2500);