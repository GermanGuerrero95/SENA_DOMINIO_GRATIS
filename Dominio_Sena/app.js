const header = document.querySelector("header");
const img = document.querySelector("img");

header.addEventListener("click", () => {
  img.style.display = "block";

  setTimeout(function () {
    location.reload();
  }, 3000); // 4000 milisegundos = 4 segundos
});
