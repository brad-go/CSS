const header = document.querySelectorAll(".project-header");
const showProjectBtn = document.querySelectorAll(".more");
const project = document.querySelectorAll(".project-body");
const imgBox = document.querySelector(".project-imgbox");
const imgList = imgBox.querySelectorAll("img");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const listBtn = document.querySelectorAll(".list-btn");

const VISIBLE = "visible";
const SELECTED = "selected";

for(let i =0; i<header.length; i++) {
  header[i].addEventListener("click", () => {
    project[i].classList.toggle(VISIBLE);
    showProjectBtn[i].classList.toggle("hide");
  })
}

// 이미지 슬라이드 만들기
// classlist display: block, display: none을 이용해서 구현했다. 

// 배열의 index number를 위해 변수 선언
let currentIdx = 0; 
const slideCount = imgList.length;

// 이전 이미지를 보여주는 함수
function moveSlideLeft(num) {
  imgList[num+1].classList.remove(VISIBLE);
  imgList[num].classList.add(VISIBLE);
  
  listBtn[num+1].classList.remove(SELECTED);
  listBtn[num].classList.add(SELECTED);

  currentIdx =num;
}

// 다음 이미지를 보여주는 함수
function moveSlideRight( num ) {
  imgList[num-1].classList.remove(VISIBLE);
  imgList[num].classList.add(VISIBLE);

  listBtn[num-1].classList.remove(SELECTED);
  listBtn[num].classList.add(SELECTED);

  currentIdx = num;
}

leftBtn.addEventListener("click", () => {
  if(currentIdx !== 0) {
    moveSlideLeft(currentIdx -1);
  }
})

rightBtn.addEventListener("click", () => {
  if(currentIdx !== slideCount -1) {
    moveSlideRight(currentIdx + 1);
  }
});


// 버튼을 클릭해도 이미지가 바뀔 수 있도록 구현하기

// 선택된 이미지를 보여주는 함수
function moveSlide(num) {
  imgList.forEach( (item) => {
    item.classList.remove(VISIBLE);
  })
  imgList[num].classList.add(VISIBLE);
}

// list의 selected class를 모두 지우고 선택된 list에 selected 클래스를 추가하는 함수
function listSelect(event) {
  listBtn.forEach( (item) => {
    item.classList.remove("selected");
  })
  const currentList = event.target;
  
  for(let i =0; i<listBtn.length; i++) {
    if(listBtn[i] === currentList) {
      currentIdx = i;
    }
  }
  moveSlide(currentIdx);
  currentList.classList.add("selected");
}

// listBtn이 배열이기 때문에 반복문을 통해 이벤트리스너 추가
for(let i =0; i<listBtn.length; i++) {
  listBtn[i].addEventListener("click", listSelect);
}