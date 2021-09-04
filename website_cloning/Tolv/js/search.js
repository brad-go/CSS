const modal = document.querySelector(".modal");
const main = document.querySelector("main");
const searchBtn = document.querySelector(".search");
const closeBtn = document.querySelector(".modal-close");
const searchInput = document.querySelector("#search-form input")

const HIDDEN = "hidden"

function searchModalOpen() {
  modal.classList.remove(HIDDEN);
  main.classList.add("blur");
  setInterval( () => {
    searchInput.focus();
  }, 1000);
  }

function searchModalClose() {
  modal.classList.add(HIDDEN);
  main.classList.remove("blur");
}

searchBtn.addEventListener("click", searchModalOpen);
closeBtn.addEventListener("click", searchModalClose);




