const toggleButton = document.querySelector(".toggle-sidebar-button");
const toggleIcon = document.querySelector(".toggle-icon");
const sidebar = document.querySelector("#sidebar")
const content = document.querySelector("#content");

toggleButton.addEventListener('click', (e) => {
  toggleButton.classList.toggle("collapsed");
  toggleIcon.classList.toggle("rotated");
  sidebar.classList.toggle("collapsed");
  sidebar.classList.toggle("hidden");
  content.classList.toggle("collapsed");
});