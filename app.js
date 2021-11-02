const h1 = document.querySelector("div.hello:first-child h1");

h1.addEventListener("click", () => {
  h1.classList.toggle("active");
});
