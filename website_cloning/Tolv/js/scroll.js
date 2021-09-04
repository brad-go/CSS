const header = document.querySelector("header");
const slideTextBox = document.querySelectorAll(".slide-text");
const slideText = document.querySelector(".slide-text h2");
const slideTextFeature = document.querySelector(".slide-text h6");
const footer = document.querySelector("footer");

const SCROLL_HEADER = "scroll-header";
const INVISIBLE = "invisible";

function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}

function handleHeaderStyle() {
  const shrinkHeader = 50;
  let currentScroll = getCurrentScroll();

  if(currentScroll > shrinkHeader) {
    header.classList.add(SCROLL_HEADER);
  } else {
    header.classList.remove(SCROLL_HEADER);
  }
}

function handleTextWithScroll() {
  const absoluteScroll = [0, 750, 1500, 2250, 3000];
  let currentScroll = getCurrentScroll();

  for(let i =0; i<5; i++) {
    if(currentScroll > absoluteScroll[i]) {
      slideTextBox.forEach( (item) => {
        item.classList.add(INVISIBLE);
      })
      slideTextBox[i].classList.remove(INVISIBLE);
    } 
  }
}

function handleFooter() {
  const growFooter = 6100;
  let currentScroll = getCurrentScroll();

  if(currentScroll > growFooter) {
    footer.classList.add("special");
    footer.classList.remove("special-reverse");
  } else if(currentScroll < 5800) {
    footer.classList.remove("special");
    footer.classList.add("special-reverse");
  }

}

window.addEventListener("scroll", ()=> {
  handleHeaderStyle();
  handleTextWithScroll();
  handleFooter();
} );
