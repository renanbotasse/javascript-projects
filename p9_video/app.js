const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const muted = document.querySelector("#mute");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.muted = true;
	muted.textContent = "Mute";
  } else {
    btn.classList.remove("slide");
    video.muted = false;
	muted.textContent = "Play";

	
  }
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});