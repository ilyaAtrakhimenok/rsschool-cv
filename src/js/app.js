let modalImg = document.getElementById("modal-img");
let modal = document.getElementById("modal");
let closeToggle = document.querySelector(".close");
function zoomImg(elem) {
  modal.style.display = "block";
  modalImg.src = elem.src;
}
function close() {
  modal.style.display = "none";
}

closeToggle.addEventListener("click", close);
