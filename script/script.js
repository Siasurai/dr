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
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}

// function showIt(el_class) {
//   var el = document.getElementsByClassName(el_class);
//   el.scrollIntoView(true, {behavior: "smooth"});
// }
// showIt('main-container')


  // var el = document.getElementsByClassName('main-container'); 
  // el.scrollIntoView(true, {behavior: "smooth"});

  