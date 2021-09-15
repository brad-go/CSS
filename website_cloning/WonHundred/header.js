const headerBottom = document.querySelector(".header-bottom");
const navList = document.querySelector(".nav-item__text");
const searchContainer = document.querySelector("#search-container");
const searchBox = document.querySelector(".nav-item__text-search");
const searchTitle = document.querySelector("#search-title");

const HIDDEN = "hidden";

// header

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function handleNavPosition() {
  const handlePoint = 105;
  let currentScroll = getCurrentScroll();
 
  if(currentScroll > handlePoint) {
    headerBottom.classList.remove("hide-nav-reverse");
    headerBottom.classList.add("hide-nav");
  } else {
    headerBottom.classList.remove("hide-nav");
    headerBottom.classList.add("hide-nav-reverse");
  }
}

window.addEventListener("scroll", handleNavPosition);

// searchBox

let searchSlide = false; 

searchContainer.addEventListener("click", () => {
  searchTitle.classList.add(HIDDEN);
  searchBox.classList.remove(HIDDEN);
  searchSlide = true;
});

document.addEventListener("click", (event) => {
  if(searchSlide === true) {
    let target = event.target;

    if(target !== navList) {
      searchTitle.classList.remove(HIDDEN);
      searchBox.classList.add(HIDDEN);
      searchSlide = false;
    }
  } 
})