const button = document.querySelector("#wrapper");
const line = document.querySelector(".line");
const lineTop = document.getElementById("line-top");
const lineMid = document.getElementById("line-mid");
const lineBot = document.getElementById("line-bot");

function rotateLine() {
  lineTop.classList.toggle('line-top');
  lineMid.classList.toggle('line-mid');
  lineBot.classList.toggle('line-bot');
}

function rotateLineReverse() {
  line.classList.remove("init");
  lineTop.classList.toggle("top-reverse");
  lineMid.classList.toggle("mid-reverse");
  lineBot.classList.toggle("bot-reverse");
}

button.addEventListener("click", () => {
  rotateLine();
  rotateLineReverse();
})

