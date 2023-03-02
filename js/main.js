let nav_btn = document.getElementById("nav-btn");

nav_btn.addEventListener("click",nav);

function nav(){
	let slide = document.querySelector(".slide");
	slide.classList.toggle("slide1");
	
}
let dark = document.getElementById("dark");

dark.addEventListener("click",darker);

function darker(){
	let body = document.querySelector("body");
	let nav = document.querySelector(".nav");
	let head = document.querySelector(".head");
	let con = document.querySelector(".con");
	let sub_head = document.querySelector(".sub-head");
	let con1 = document.querySelector(".con1");
	let sub_head1 = document.querySelector(".sub-head1");
	let con2 = document.querySelector(".con2");
	let sub_head2 = document.querySelector(".sub-head2");
	head.classList.toggle("head_1");
	body.classList.toggle("dbody");
	nav.classList.toggle("dnav");
	sub_head.classList.toggle("textu");
	con.classList.toggle("text");
	sub_head1.classList.toggle("textu");
	con1.classList.toggle("text");
	sub_head2.classList.toggle("textu");
	con2.classList.toggle("text");
	dark.classList.toggle("text");
}
