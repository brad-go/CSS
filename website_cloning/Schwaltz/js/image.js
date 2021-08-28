const img = document.querySelector("#random-img");

function showImage() {
  const random = Math.floor(Math.random() * 400);
  img.src = `https://source.unsplash.com/random/400*${random}`;
}

showImage();
setInterval(showImage, 4000);
