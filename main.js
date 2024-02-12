
let myBoolean = true;
// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
var svgPath = document.querySelector("#setting-btn svg path");
window.addEventListener("load", function () {
  loader.style.display = "none";
  document.querySelector('.hey').classList.add('popup');
  this.playpause();
})

function playpause() {
  if (myBoolean == false) {
    audio.pause();
    myBoolean=true;
    svgPath.setAttribute("d", "M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8");

   }

 else{
     audio.play();
     myBoolean=false;
     svgPath.setAttribute("d", "M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0");

 }
  }

  function visualmode(){
    document.body.classList.toggle('light-mode');
    var elements = document.querySelectorAll('.needtobeinvert');
    elements.forEach(function(element) {
        element.classList.toggle('invertapplied');
    });


  }
let emptyArea = document.getElementById("emptyarea");
 let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
 document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hidemenubyli(){
document.body.classList.toggle("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul a li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul a li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 500)){
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach( li => {
    li.classList.remove('activeThismobiletab');
    if(li.classList.contains(current)){
      li.classList.add('activeThismobiletab')
    }
  })
navLi.forEach( li => {
  li.classList.remove('activeThistab');
  if(li.classList.contains(current)){
    li.classList.add('activeThistab')
  }
})
})
console.log('%c Designed and Developed by Vinod Jangid ', 'background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;');



let mybutton = document.getElementById("backtotopbutton");
window.onscroll = function(){
  scrollFunction()
};

function scrollFunction(){
  if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
  {
    mybutton.style.display = "block";
  }
   else{
      mybutton.style.display = "none";
     
      }
}

function scrolltoTopfunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// document.addEventListener("contextmenu", function (e){
//   e.preventDefault();
// }, false);

document.addEventListener("contextmenu", function(e){
  if (e.target.nodeName === "IMG") {
      e.preventDefault();
  }
}, false);





let pupils = document.getElementsByClassName('pupil');
let pupilsArr = Array.from(pupils);
// console.log(pupils);

let pupilStartPoint = -1;
let pupilRange = 3;

// mouse X 
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;


// mouse Y position 
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = (event) => {
    currentXPosition = event.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;

    currentYPosition = event.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;
    
    let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRange);
    let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRange);

    pupilsArr.forEach((curPupil) => {
        curPupil.style.transform= `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
    })

}

const windowResize = (event) => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
}


window.addEventListener('mousemove', mouseMove);
window.addEventListener('resize', windowResize);



