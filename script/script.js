function scrollTo (element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var btnProg = document.querySelector(".button");
var btnBrief = document.querySelector(".btnBrief");
var backtonav = document.querySelector(".question__arrow");
var goalProg = document.querySelector("#program_menu");
var goalBrief = document.querySelector('#briefly')
var goalNav = document.querySelector ('nav')
btnProg.addEventListener('click', () => {
  scrollTo(goalProg);
})
btnBrief.addEventListener('click', () => {
  scrollTo(goalBrief);
})
backtonav.addEventListener('click', () => {
  scrollTo(goalNav);
})


var slideIndex = 0;
showSlides(slideIndex);

function minusSlide(){
	showSlides(currentSlide() - 1);
}
function plusSlide() {
	showSlides(currentSlide() + 1);
}
function currentSlide() {
	var slides = document.querySelectorAll(".comment__content");
	let i;
	slides.forEach(function (slide, idx){
		if (slide.style.display == "flex"){
			console.log(idx + 1)
			i = idx;
		}
	})
	return i;
}
function showSlides (n) {
	var i;
	var slides = document.querySelectorAll(".comment__content");

	if (n > slides.length - 1) {
		n=0
	}
	if (n < 0) {
		n=slides.length - 1
	}
	for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  	}
  slides[n].style.display = "flex";
}


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}
  