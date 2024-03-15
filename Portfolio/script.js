console.log('%cHey Hey, what are you doing here?', 'background: #F1C40F; color: #17202A; font-size: 3.5dvh;');
console.log('%cIf you are searching for something on the code you can find it on my Github :)', 'background: #F39C12; color: #17202A; font-size: 2.5dvh;');
console.log('%chttps://github.com/ZeRy0X/portfolio', 'background: #E74C3C; color: #17202A; font-size: 2.5dvh;');

const mainOverBtn = function() {

    if (!btn.classList.contains("class")) {
        btn.classList.add("class");
   } else {
        btn.classList.remove("class");
   }
 
}

const mainClickBtn = function() {

    if (!btnsDiv.classList.contains("appearBtns")) {
        btnsDiv.classList.add("appearBtns");
        btnsDiv.classList.remove("disappearBtns");
   } else {
        btnsDiv.classList.remove("appearBtns");
        btnsDiv.classList.add("disappearBtns");
   }

}

const amBtn = function() {

    if (!aboutMeBtn.classList.contains("class")) {
        aboutMeBtn.classList.add("class");
   } else {
        aboutMeBtn.classList.remove("class");
   }

}



const bg = document.querySelector('#bg');
const windowWidth = window.innerWidth / 3;
const windowHeight = window.innerHeight / 3 ;

bg.addEventListener('mousemove', (e) => {

     const mouseX = e.clientX / windowWidth;
     const mouseY = e.clientY / windowHeight;
  
     bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;

});




const constrain = 50;
const animatedCard = document.querySelector('.animatedCard2');
 
function transforms(x, y, el) {

     const box = el.getBoundingClientRect();

     const calcX = -(y - box.y - (box.height / 2)) / constrain;
     const calcY = (x - box.x - (box.width / 2)) / constrain;
     return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;

}
 
function transformElement(el, xyEl) {

     el.style.transform = transforms.apply(null, xyEl);

}
 
animatedCard.onmousemove = function (e) {
     const xy = [e.clientX, e.clientY];
     const position = xy.concat([animatedCard]);
 
     window.requestAnimationFrame(function () {

          transformElement(animatedCard, position);

     });

};

animatedCard.onmouseleave = function (e) {
     const xy = [e.clientX, e.clientY];
     const position = xy.concat(0);
     // const position = 0;
 
     window.requestAnimationFrame(function () {

          transformElement(0, 0);

     });

};







