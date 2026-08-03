/*=========================
  PORTFOLIO SCRIPT
==========================*/

document.addEventListener("DOMContentLoaded",()=>{

/*-------------------------
Typing Effect
-------------------------*/

const words=[
"Web Developer",
"App Developer",
"Frontend Engineer",
"UI/UX Designer",
"Data Analyst"
];

let wordIndex=0;
let charIndex=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex<0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?45:90);

}

type();

/*-------------------------
Dark / Light Mode
-------------------------*/

const toggle=document.querySelector(".theme-toggle");

if(localStorage.getItem("theme")==="light"){

document.body.classList.add("light");

toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}

toggle.onclick=()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

localStorage.setItem("theme","light");

toggle.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","dark");

toggle.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};

/*-------------------------
Custom Cursor
-------------------------*/

const cursor=document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

/*-------------------------
Reveal Animation
-------------------------*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.2
});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(70px)";

section.style.transition="1s ease";

observer.observe(section);

});

/*-------------------------
Particles
-------------------------*/

particlesJS("particles-js",{

particles:{

number:{
value:90
},

color:{
value:"#3b82f6"
},

shape:{
type:"circle"
},

opacity:{
value:.45
},

size:{
value:3
},

move:{
enable:true,
speed:2
},

line_linked:{
enable:true,
color:"#3b82f6",
opacity:.25
}

},

interactivity:{

events:{

onhover:{
enable:true,
mode:"grab"
},

onclick:{
enable:true,
mode:"push"
}

}

},

retina_detect:true

});

/*-------------------------
EmailJS
-------------------------*/

/* Replace these with your own EmailJS IDs */

emailjs.init("YOUR_PUBLIC_KEY");

const form=document.getElementById("contact-form");

form.addEventListener("submit",function(e){

e.preventDefault();

emailjs.sendForm(

"YOUR_SERVICE_ID",

"YOUR_TEMPLATE_ID",

this

)

.then(()=>{

alert("Message sent successfully!");

form.reset();

})

.catch(()=>{

alert("Failed to send message.");

});

});

});

/*=========================
Smooth Active Nav
==========================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

/*=========================
Project Hover Tilt
==========================*/

document.querySelectorAll(".project").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*16;

const rotateX=((y/rect.height)-0.5)*-16;

card.style.transform=

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(900px) rotateX(0) rotateY(0)";

});

});
