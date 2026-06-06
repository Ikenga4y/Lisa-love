/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

const loader =
document.querySelector(".loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 800);

}, 1500);

});

/* =========================
   STICKY HEADER
========================= */

const header =
document.getElementById("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});

/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

if(navLinks.classList.contains("mobile-open")){

navLinks.classList.remove("mobile-open");

}else{

navLinks.classList.add("mobile-open");

}

});

/* =========================
   MOBILE MENU STYLES
========================= */

const style =
document.createElement("style");

style.innerHTML = `

.mobile-open{

display:flex !important;

flex-direction:column;

position:absolute;

top:90px;

right:20px;

background:#080808;

padding:25px;

border-radius:15px;

width:220px;

box-shadow:
0 15px 40px rgba(0,0,0,.5);

z-index:9999;

}

.mobile-open li{

margin:10px 0;

}

`;

document.head.appendChild(style);

/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials =
document.querySelectorAll(".testimonial");

let currentSlide = 0;

function showSlide(index){

testimonials.forEach((slide)=>{

slide.classList.remove("active");

});

testimonials[index]
.classList.add("active");

}

setInterval(() => {

currentSlide++;

if(currentSlide >= testimonials.length){

currentSlide = 0;

}

showSlide(currentSlide);

}, 5000);

/* =========================
   SCROLL REVEAL
========================= */

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
'section,.service-card,.gallery img,.testimonial'
).forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

/* =========================
   COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".stat h2");

const counterObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter =
entry.target;

const text =
counter.innerText;

if(text.includes("★")) return;

const target =
parseInt(text);

let count = 0;

const speed =
target / 60;

const update = () => {

count += speed;

if(count < target){

counter.innerText =
Math.floor(count) + "+";

requestAnimationFrame(update);

}else{

counter.innerText =
target + "+";

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages =
document.querySelectorAll(".gallery-grid img");

const lightbox =
document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML =

'<img src="" alt="">';

document.body.appendChild(lightbox);

const lightboxImg =
lightbox.querySelector("img");

galleryImages.forEach((image)=>{

image.addEventListener("click",()=>{

lightbox.style.display = "flex";

lightboxImg.src = image.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display = "none";

});

/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener("click",(e)=>{

e.preventDefault();

const target =
document.querySelector(
anchor.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* =========================
   PARALLAX HERO
========================= */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let scroll =
window.pageYOffset;

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

});

/* =========================
   BUTTON HOVER GLOW
========================= */

const buttons =
document.querySelectorAll(
'.btn-primary,.book-btn'
);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.boxShadow =
"0 0 30px rgba(255,77,109,.5)";

});

button.addEventListener("mouseleave",()=>{

button.style.boxShadow =
"none";

});

});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 120;

if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
=== "#" + current
){

link.classList.add("active");

}

});

});

/* =========================
   ACTIVE LINK STYLE
========================= */

const activeStyle =
document.createElement("style");

activeStyle.innerHTML = `

.nav-links a.active{

color:#ff4d6d;

}

`;

document.head.appendChild(activeStyle);

/* =========================
   FLOATING ANIMATION
========================= */

const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach((card,index)=>{

card.style.animation =
`floatCard 4s ease-in-out ${index * 0.2}s infinite`;

});

const floatStyle =
document.createElement("style");

floatStyle.innerHTML = `

@keyframes floatCard{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-8px);
}

100%{
transform:translateY(0);
}

}

`;

document.head.appendChild(floatStyle);

/* =========================
   CONTACT FORM
========================= */

const form =
document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert(
"Thank you! Your message has been received. We will contact you shortly."
);

form.reset();

});

}

/* =========================
   YEAR AUTO UPDATE
========================= */

const footer =
document.querySelector("footer p");

if(footer){

const year =
new Date().getFullYear();

footer.innerHTML =
`© ${year} Hair By Lisa Love • All Rights Reserved`;

}

/* =========================
   END
========================= */
const serviceCategories =
document.querySelectorAll(".service-category");

serviceCategories.forEach(category=>{

    const card =
    category.querySelector(".service-card");

    card.addEventListener("click",()=>{

        category.classList.toggle("active");

    });

});
