const navOpen = document.getElementById("wrapper");
const menu = document.querySelector("#menu");
const navHeader = document.querySelector("header");
const page = document.querySelector(".page");

navOpen.addEventListener("click", () => {
  menu.classList.toggle("active");
  navHeader.classList.toggle("margin");
  page.classList.toggle("margin");
})