'use strict';

//event listener
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

//navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click", toggleNavbar);

//header 
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

//auto-slide




//scroll anime

AOS.init();

//slider
// const sliders = document.querySelectorAll("[data-slider]");

// const initSlider = function(currentSlider) {

//   const sldierContainer = currentSlider.querySelector("[data-slider-container]");
//   const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
//   const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

//   let currentSlidePos = 0;
//   const moveSliderItem = function () {
//     sldierContainer.style.transform = `translateX(-${sldierContainer.children[currentSlidePos].offsetLeft}px)`;
//   }

  //next slide
  // const slideNext = function () {
  //   const slideEnd = currentSlidePos >= sldierContainer.childElementCount -1;

  //   if (slideEnd) {
  //     currentSlidePos = 0;
  //   } else {
  //     currentSlidePos++;
  //   }
    
  //   moveSliderItem();
  // }

  // sliderNextBtn.addEventListener("click", slideNext);

  //previous slide
//    const slidePrev = function () {

//     if (currentSlidePos <= 0) {
//       currentSlidePos = sldierContainer.childElementCount - 1;
//     } else {
//       currentSlidePos--;
//     }
//     moveSliderItem();
//   }

//   sliderPrevBtn.addEventListener("click", slidePrev);

//   const dontHaveExtraItem = sldierContainer.childElementCount <= 1;
//   if (dontHaveExtraItem) {
//     sliderNextBtn.style.display = "none";
//     sliderPrevBtn.style.display = "none";
//   }

// }

// for (let i = 0, len = sliders.length; i < len; i++) { initSlider(sliders[i]); }



/**
 * ACCORDION
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  const expandAccordion = function () {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }

    currentAccordion.classList.toggle("expanded");

    lastActiveAccordion = currentAccordion;
  }

  accordionBtn.addEventListener("click", expandAccordion);

}

for (let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]); }


const btns = document.querySelectorAll(".btn");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector("main");

let currentIndex = 0;

function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = `translateX(${translateValue}px)`;

  btns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index;
    updateSlide();
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});





//email
//Contact Form in PHP
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
        statusTxt.style.color = "red";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}




// fade in grid items  ==================================
