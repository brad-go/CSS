const img = ["01.jpg", "01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"]

const numberBox = document.querySelectorAll(".number");
const mainImage = document.querySelector(".main_image");



const changeImage = (index) => {
  const num = String(index+1).padStart(2, "0")
  
  const url = `url(img/${num}.jpg)`;
  
  mainImage.style.backgroundImage = url;
}

numberBox.forEach((box, index) => {
  box.addEventListener("mouseover", (event) => {
    changeImage(index);
  });
});
