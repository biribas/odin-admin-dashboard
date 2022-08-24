const toggleButton = document.querySelector(".toggle-sidebar-button");
const sidebar = document.querySelector("#sidebar")
const content = document.querySelector("#content");
const itemNames = document.querySelectorAll(".item-name");

toggleButton.addEventListener('click', (e) => {
  itemNames.forEach(item => item.classList.toggle("show-item-name"));
  toggleButton.classList.toggle("rotate");
  sidebar.classList.toggle("colapsed");
  content.classList.toggle("transitioned");
});