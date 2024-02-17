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



const bg = document.querySelector('body');
const windowWidth = window.innerWidth / 3;
const windowHeight = window.innerHeight / 3 ;

bg.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;
  
  bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});






