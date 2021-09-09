const drawerBtn = document.querySelector("#drawer-button");
const headerDrawer = document.querySelector(".header-drawer");

drawerBtn.addEventListener("click", () => {
  drawerBtn.classList.toggle("rotate");
  headerDrawer.classList.toggle("draw");
})