const main = document.querySelector("main");
const searchPage = document.querySelector(".search-page");
const page = document.querySelector(".page");
const searchBtn = document.querySelector(".search");
const input = document.querySelector(".search-box");
const helper = document.querySelector(".search-help");


searchBtn.addEventListener("click", () => {
  page.classList.toggle("hidden");
  searchPage.classList.toggle("hidden");
  input.focus();

})

// 입력값을 화면에 출력하기
input.addEventListener("keyup", (event) => {
  const value = input.value;

  helper.innerText = `Nichts gefunden für "${value}".`
})
