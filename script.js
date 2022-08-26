const toggleButton = document.querySelector(".toggle-sidebar-button");
const toggleIcon = document.querySelector(".toggle-icon");
const sidebar = document.querySelector("#sidebar")
const announcements = document.querySelector("#announcements");
const trending = document.querySelector("#trending");
const overlay = document.querySelector(".overlay");

const hamburguer = document.querySelector(".hamburguer");
const announcementsButton = document.querySelector(".announcements-button")
const trendingButton = document.querySelector(".trending-button")

const hideSidebarQuery = window.matchMedia("(max-width: 750px)");

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle("collapsed");
  sidebar.classList.toggle("hidden-names");
  toggleIcon.classList.toggle("rotated");
});

hamburguer.addEventListener('click', () => {
  document.body.classList.remove("collapsed");
  sidebar.classList.remove("hidden-names");
  overlay.classList.remove("hidden");
});

announcementsButton.addEventListener('click', () => {
  announcements.classList.add("show");
  overlay.classList.remove("hidden");
});

trendingButton.addEventListener('click', () => {
  trending.classList.add("show");
  overlay.classList.remove("hidden");
});

overlay.addEventListener('click', () => {
  overlay.classList.add('hidden');
  announcements.classList.remove("show");
  trending.classList.remove("show");
  document.body.classList.add("collapsed");
  sidebar.classList.add("hidden-names");
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