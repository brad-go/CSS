const products = document.querySelector(".product");
const product = products.childNodes;
const labels = document.querySelectorAll(".product-labels");
const secondLables = document.querySelectorAll(".product-labels__second");

console.log(product);

product.forEach( (item) => {
  let currentText = item.childNodes[3];
  let nowText = item.childNodes[5];

  item.addEventListener("mouseover", () => {
    console.log(item.childNodes);
    currentText.classList.add("hidden");
    nowText.classList.remove("hidden");
  })
  item.addEventListener("mouseleave", () => {
    nowText.classList.add("hidden");
    currentText.classList.remove("hidden");
  })
})