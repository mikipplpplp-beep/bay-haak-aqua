const products = [

{
name:"Вода",
volume:"0,5л · 1л · 5л · 19л",
image:"photos/voda.png"
},

{
name:"Чай с лесными ягодами",
volume:"0,5л · 1л",
image:"photos/чайлесные.png"
},

{
name:"Чай Персик",
volume:"0,5л · 1л",
image:"photos/product3.png"
},

{
name:"Чай Лимон",
volume:"0,5л · 1л",
image:"photos/product4.png"
},

{
name:"Компот Абрикос",
volume:"1л",
image:"photos/компотабр.png"
},

{
name:"Компот Чернослив",
volume:"1л",
image:"photos/компотчерн.png"
},

{
name:"Шиповник",
volume:"0,5л · 1л",
image:"photos/product7.png"
},

{
name:"Клубника",
volume:"1л",
image:"photos/клубничка.png"
},

{
name:"Груша",
volume:"1л",
image:"photos/product9.png"
},

{
name:"Облепиха",
volume:"1л",
image:"photos/product10.png"
},

{
name:"Лимонад",
volume:"1л",
image:"photos/лимонад.png"
},

{
name:"Крем-сода",
volume:"1л",
image:"photos/кремсода.png"
},

{
name:"Кола",
volume:"1л",
image:"photos/кола.png"
},

{
name:"Миринда",
volume:"1л",
image:"photos/миринда.png"
},

{
name:"Квас",
volume:"0,5л · 1л",
image:"photos/квас.png"
}

];

let currentIndex = 0;

const leftImg = document.getElementById("left-img");
const centerImg = document.getElementById("center-img");
const rightImg = document.getElementById("right-img");

const leftTitle = document.getElementById("left-title");
const centerTitle = document.getElementById("center-title");
const rightTitle = document.getElementById("right-title");

const leftVolume = document.getElementById("left-volume");
const centerVolume = document.getElementById("center-volume");
const rightVolume = document.getElementById("right-volume");

const dotsContainer =
document.querySelector(".slider-dots");

products.forEach((_, i)=>{

    const dot =
    document.createElement("span");

    dot.classList.add("dot");

    if(i === 0){
        dot.classList.add("active");
    }

    dotsContainer.appendChild(dot);

});

const dots =
document.querySelectorAll(".dot");

function render(){

    const left =
    (currentIndex - 1 + products.length)
    % products.length;

    const right =
    (currentIndex + 1)
    % products.length;

    leftImg.src = products[left].image;
    leftTitle.textContent = products[left].name;
    leftVolume.textContent = products[left].volume;

    centerImg.src = products[currentIndex].image;
    centerTitle.textContent = products[currentIndex].name;
    centerVolume.textContent = products[currentIndex].volume;

    rightImg.src = products[right].image;
    rightTitle.textContent = products[right].name;
    rightVolume.textContent = products[right].volume;

    dots.forEach(dot =>
        dot.classList.remove("active")
    );

    dots[currentIndex]
    .classList.add("active");
}

function nextSlide(){

    const leftCard =
    document.getElementById("left-card");

    const centerCard =
    document.getElementById("center-card");

    const rightCard =
    document.getElementById("right-card");

    leftCard.style.opacity = "0";
    centerCard.style.transform =
    "translateX(-305px) scale(.85)";
    rightCard.style.transform =
    "translateX(-305px) scale(1)";

    setTimeout(()=>{

        currentIndex =
        (currentIndex + 1)
        % products.length;

        render();

        leftCard.style.opacity = ".45";

        centerCard.style.transform =
        "";

        rightCard.style.transform =
        "";

    },700);

}

function prevSlide(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex =
        products.length - 1;

    }

    render();

}

document
.querySelector(".next")
.addEventListener("click", nextSlide);

document
.querySelector(".prev")
.addEventListener("click", prevSlide);

render();

setInterval(nextSlide,3000);

const video = document.getElementById("heroVideo");
const soundBtn = document.querySelector(".sound-btn");

soundBtn.addEventListener("click", () => {

    if(video.muted){

        video.muted = false;
        soundBtn.textContent = "🔊";

    }else{

        video.muted = true;
        soundBtn.textContent = "🔇";

    }

});