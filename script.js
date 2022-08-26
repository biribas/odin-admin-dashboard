const toggleButton = document.querySelector(".toggle-sidebar-button");
const toggleIcon = document.querySelector(".toggle-icon");
const sidebar = document.querySelector("#sidebar")
const announcements = document.querySelector("#announcements");
const trending = document.querySelector("#trending");

const hamburguer = document.querySelector(".hamburguer");
const announcementsButton = document.querySelector(".announcements-button")
const trendingButton = document.querySelector(".trending-button")

const hideSidebarQuery = window.matchMedia("(max-width: 750px)");

toggleButton.addEventListener('click', (e) => {
  document.body.classList.toggle("collapsed");
  sidebar.classList.toggle("hidden-names");
  toggleIcon.classList.toggle("rotated");
});

hamburguer.addEventListener('click', e => {
  document.body.classList.remove("collapsed");
  sidebar.classList.remove("hidden-names");
});

announcementsButton.addEventListener('click', e => {
  announcements.classList.add("show");
});

trendingButton.addEventListener('click', e => {
  trending.classList.add("show");
});

hideSidebarQuery.onchange = e => {
  if (!e.matches) {
    announcements.classList.remove("show");
    trending.classList.remove("show");
  }
  document.body.classList.add("collapsed");
  sidebar.classList.add("hidden-names");
  toggleIcon.classList.remove("rotated");

}