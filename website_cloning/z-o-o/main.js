const nav = document.querySelector(".main-nav");
const firstNav = document.querySelector("#first-mnav");
const secondNav = document.querySelector("#second-mnav");
const home = document.querySelector("#home");
const button = document.querySelector("#close")

// zoo 를 클릭하면 새로고침하게 만듬
home.addEventListener("click", () => {
  location.reload();
})

// main-nav를 클릭하면 info 창이 켜지게
nav.addEventListener("click", () => {
  secondNav.classList.toggle("hidden");
  button.classList.toggle("hidden");
  firstNav.classList.toggle("active");
})

