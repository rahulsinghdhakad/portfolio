
let theme="light";
if(localStorage.getItem("theme")) theme=localStorage.getItem("theme");

const toggle = () => {
    const hamLinks = document.querySelector(".ham-links");
    const hamburger = document.querySelector(".hamburger");
    hamLinks.classList.toggle("open")
    hamburger.classList.toggle("open")
}

const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const root=document.querySelector(":root");
const themeBtn=document.getElementById("theme-btn")

const toggleSvg = () => {
    if(theme==="light") theme="dark";
    else theme="light";
    localStorage.setItem("theme",theme)

    moon.classList.toggle("close")
    sun.classList.toggle("close")

    root.classList.toggle("dark")
}

if(theme==="dark"){
    moon.classList.toggle("close")
    sun.classList.toggle("close")
}


themeBtn.onclick=toggleSvg

// window.addEventListener("hashchange",(e)=>{
//     let oldhash='#'+ e.oldURL.split('#').pop();
//     let newhash=window.location.hash;
//     if(!newhash) newhash='#';
//     const newelement=document.querySelector(`a[href="${newhash}"]`);
//     const oldelement=document.querySelector(`a[href="${oldhash}"]`);
//     newelement.classList.add("underline")
//     oldelement.classList.remove("underline")
// })