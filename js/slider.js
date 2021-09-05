let sliders = document.querySelectorAll(".item");
let dots = document.querySelectorAll(".slider-dot");
let leftArrow = document.querySelector(".left-arrow");
let rightArrow = document.querySelector(".right-arrow");
hideSliders(findActiveIndex(sliders, "active"));
function moveNext() {
  let activeIndex = findActiveIndex(sliders, "active");

  if (activeIndex == sliders.length - 1) {
    sliders[activeIndex].classList.remove("active");
    sliders[0].classList.add("active");

    dots[activeIndex].classList.remove("active-dot");
    dots[0].classList.add("active-dot");
    hideSliders(0);
  } else {
    sliders[activeIndex].classList.remove("active");
    sliders[activeIndex + 1].classList.add("active");

    dots[activeIndex].classList.remove("active-dot");
    dots[activeIndex + 1].classList.add("active-dot");
    hideSliders(activeIndex + 1);
  }
}
function movePrev() {
  let activeIndex = findActiveIndex(sliders, "active");

  if (activeIndex == 0) {
    sliders[activeIndex].classList.remove("active");
    sliders[sliders.length - 1].classList.add("active");

    dots[activeIndex].classList.remove("active-dot");
    dots[sliders.length - 1].classList.add("active-dot");
    hideSliders(sliders.length - 1);
  } else {
    sliders[activeIndex].classList.remove("active");
    sliders[activeIndex - 1].classList.add("active");

    dots[activeIndex].classList.remove("active-dot");
    dots[activeIndex - 1].classList.add("active-dot");
    hideSliders(activeIndex - 1);
  }
}
function changeActiveElement(elem) {
  let activeIndex = findActiveIndex(dots, "active-dot");
  dots[activeIndex].classList.remove("active-dot");
  elem.classList.add("active-dot");
  activeIndex = findActiveIndex(sliders, "active");
  sliders[activeIndex].classList.remove("active");
  activeIndex = findActiveIndex(dots, "active-dot");
  sliders[activeIndex].classList.add("active");
  hideSliders(activeIndex);
}
function findActiveIndex(arr, classActive) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].classList.contains(classActive)) {
      return i;
    }
  }
}
function hideSliders(activeIndex) {
  for (let i = 0; i < sliders.length; i++) {
    if (i != activeIndex) {
      sliders[i].style.display = "none";
    } else {
      sliders[i].style.display = "block";
    }
  }
}
rightArrow.addEventListener("click", moveNext);
leftArrow.addEventListener("click", movePrev);
