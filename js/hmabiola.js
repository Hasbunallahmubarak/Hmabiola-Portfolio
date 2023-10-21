"use strict";
var slideIndex = 1;
showSlide(slideIndex);
function currentSlide(n) {
	showSlide(slideIndex = n);
}
function showSlide(n) {
	var i;
	var slide = document.getElementsByClassName('slidesome');
	for ( i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	if (n > slide.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slide.length}
	slide[slideIndex-1].style.display = "block";
}

shallSlide(slideIndex);
function currentoneSlide(n) {
	shallSlide(slideIndex = n);
}
function shallSlide(n) {
	var i;
	var slides = document.getElementsByClassName('slide');
	var dot = document.getElementsByClassName('swing');
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for ( i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for ( i = 0; i < dot.length; i++) {
		dot[i].className = dot[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dot[slideIndex-1].className += " active";
}

function openN() {
	var nav = document.getElementById('nav');
	if (nav.style.display === "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}
}
function closeI() {
	document.getElementById('overlay').style.display = "none";
}
function openI() {
	document.getElementById('overlay').style.display = "flex";
}
