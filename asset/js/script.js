let body = document.body;
// side bar
let sideBar = document.querySelector('.side-bar');
document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('.side-bar .close-side-bar').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');
   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}




//  dark and light theme
let toggleBtn=document.querySelector('#dark-btn');
let darkMode = localStorage.getItem('dark-mode');
const enableDarkMode = () =>{
   toggleBtn.classList.toggle('on');
   document.body.classList.toggle('darkMood');
   localStorage.setItem('dark-mode','enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.remove('on');
   body.classList.remove('darkMood');
   localStorage.setItem('dark-mode','disabled')
}
if(darkMode === 'enabled'){
   enableDarkMode();
}
toggleBtn.onclick = (e)=>{
   let darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else {
      disableDarkMode();
   }
}

// show slider
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
   showSlides(slideIndex += n);
}
function currentSlide(n) {
   showSlides(slideIndex = n);
}
function showSlides(n) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("demo");
   let captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
   slides[i].style.display = "none";
   }
   for (i = 0; i < dots.length; i++) {
   dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
}




