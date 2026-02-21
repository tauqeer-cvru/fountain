/* SLIDER */
let slideIndex = 0;
const slides = document.querySelectorAll(".slider img");

function showSlides(){
    slides.forEach((slide,i)=>{
        slide.style.display = i===slideIndex ? "block":"none";
    });
    slideIndex = (slideIndex+1)%slides.length;
}
setInterval(showSlides,3000);
showSlides();

/* TABS */
function openTab(evt,id){
    let content=document.getElementsByClassName("tab-content");
    for(let i=0;i<content.length;i++){
        content[i].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
}
