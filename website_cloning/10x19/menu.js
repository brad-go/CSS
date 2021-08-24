const menu = document.querySelector(".menu");

menu.addEventListener("click", (event) => {
  event.target.classList.toggle("hidden");
});