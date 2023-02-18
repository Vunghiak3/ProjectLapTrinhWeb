const progressbar = document.querySelector(".progress-bar");
const bar = document.querySelector(".bar");
const showmenu = document.querySelector(".menu-mobi");

progressbar.addEventListener("click", () => {
  bar.classList.toggle("rotate-bar");
  showmenu.classList.toggle("show-menu");
});
