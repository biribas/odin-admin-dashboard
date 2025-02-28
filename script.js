const toggleButton = document.querySelector(".toggle-sidebar-button");
const toggleIcon = document.querySelector(".toggle-icon");
const sidebar = document.querySelector("#sidebar")
const announcements = document.querySelector("#announcements");
const trending = document.querySelector("#trending");
const overlay = document.querySelector(".overlay");

const hamburguer = document.querySelector(".hamburguer");
const announcementsButton = document.querySelector(".announcements-button");
const trendingButton = document.querySelector(".trending-button");

const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

const hideSidebarQuery = window.matchMedia("(max-width: 750px)");

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle("collapsed");
  sidebar.classList.toggle("hidden-names");
  toggleIcon.classList.toggle("rotated");
});

hamburguer.addEventListener('click', () => {
  document.body.classList.remove("collapsed", "hidden-overlay");
  sidebar.classList.remove("hidden-names");
});

announcementsButton.addEventListener('click', () => {
  document.body.classList.remove("hidden-overlay");
  announcements.classList.add("show");
});

trendingButton.addEventListener('click', () => {
  document.body.classList.remove("hidden-overlay");
  trending.classList.add("show");
});

lightMode.addEventListener('click', () => {
  lightMode.classList.add("hidden");
  darkMode.classList.remove("hidden");
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
});

darkMode.addEventListener('click', () => {
  lightMode.classList.remove("hidden");
  darkMode.classList.add("hidden");
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
});

overlay.addEventListener('click', () => {
  document.body.classList.add("collapsed", "hidden-overlay");
  announcements.classList.remove("show");
  trending.classList.remove("show");
  sidebar.classList.add("hidden-names");
});

hideSidebarQuery.onchange = e => {
  if (!e.matches) {
    announcements.classList.remove("show");
    trending.classList.remove("show");
  }
  document.body.classList.add("collapsed", "hidden-overlay");
  sidebar.classList.add("hidden-names");
  toggleIcon.classList.remove("rotated");
}