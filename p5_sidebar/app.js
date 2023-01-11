const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
	sidebar.classList.toggle("show-sidebar");
});
//dá o direito de abrir e fechar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});