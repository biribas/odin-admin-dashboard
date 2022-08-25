const toggleButton = document.querySelector(".toggle-sidebar-button");
const toggleIcon = document.querySelector(".toggle-icon");
const sidebar = document.querySelector("#sidebar")
const content = document.querySelector("#content");

const hamburguer = document.querySelector(".hamburguer");
const announcementsButton = document.querySelector(".announcements-button")
const trendingButton = document.querySelector(".trending-button")

const hideSidebarQuery = window.matchMedia("(max-width: 750px)");

toggleButton.addEventListener('click', (e) => {
  document.body.classList.toggle("collapsed");
  document.body.classList.toggle("hidden");
  toggleIcon.classList.toggle("rotated");
});

hamburguer.addEventListener('click', e => {
  
});

announcementsButton.addEventListener('click', e => {

});

trendingButton.addEventListener('click', e => {

});

hideSidebarQuery.onchange = e => {
  if (e.matches) {
    document.body.classList.add("collapsed", "hidden");
    toggleIcon.classList.remove("rotated");
    sidebar.classList.add("hidden");
  }
  else {
    sidebar.classList.remove("hidden");
  }
}