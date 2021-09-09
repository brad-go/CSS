const card = document.querySelectorAll(".card");
const cardMain= document.querySelectorAll(".card-main");
const cardTextHover = document.querySelectorAll(".card-text-hover");
const specialCard = document.querySelector(".special-card");
const specialCardMain = document.querySelector(".special-card-main");

for(let i=0; i < card.length; i++) {
  card[i].addEventListener("mouseover", () => {
    cardMain[i].classList.add("hidden");
    cardTextHover[i].classList.remove("hidden");
  })
  
  card[i].addEventListener("mouseleave", (event) => {
    cardMain[i].classList.remove("hidden");
    cardTextHover[i].classList.add("hidden");
  })
}

specialCard.addEventListener("mouseover", () => {
  specialCardMain.classList.add("hidden");
  specialCard.classList.add("special-back");
})

specialCard.addEventListener("mouseleave", () => {
  specialCardMain.classList.remove("hidden");
  specialCard.classList.remove("special-back");
})


// card[i].addEventListener("mouseleave", (event) => {
//   const cardMain = event.target.childNodes[3];
//   const cardTextHover = event.target.childNodes[5];
//   cardMain.classList.remove("hidden");
//   cardTextHover.classList.add("hidden");
// })

