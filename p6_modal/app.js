const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
//o modal sempre tá lá, nós que colocamos no CSS ele sem aparecer e usamos o JS para aparecer ou não
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  //muda a classe e torna visivel
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
  //muda a classe e apaga
});