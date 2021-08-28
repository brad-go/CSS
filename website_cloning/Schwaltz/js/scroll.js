const header = document.querySelector("header");
const headerTitle = document.querySelectorAll(".header-title");
const scrollTitle = document.querySelector(".scroll-title");
const wrapper = document.querySelector("#wrapper");

const HIDDEN = 'hidden';
const ACTIVE_BUTTON = 'active-button';
const HEADER_SCROLLED = 'header-scrolled';

// 현재 스크롤 위치를 가져오는 함수
function getCurrentScroll(){
  return window.pageYOffset || document.documentElement.scrollTop;
}

function handleButtonLocate() {
  const shrinkHeader = 100;
  
  // 현재 스크롤 위치를 변수에 저장
  let scroll = getCurrentScroll();

  if(scroll >= shrinkHeader) {
    wrapper.classList.add(ACTIVE_BUTTON);
    header.classList.add(HEADER_SCROLLED);
    headerTitle[0].classList.add(HIDDEN);
    headerTitle[1].classList.add(HIDDEN);
    scrollTitle.classList.remove(HIDDEN);
  } else {
    wrapper.classList.remove(ACTIVE_BUTTON);
    header.classList.remove(HEADER_SCROLLED);
    headerTitle[0].classList.remove(HIDDEN);
    headerTitle[1].classList.remove(HIDDEN);
    scrollTitle.classList.add(HIDDEN);
  }
}

window.addEventListener("scroll", handleButtonLocate);
