const searchBtn = document.querySelector("#search--Btn");
const searchBox = document.querySelector("#search--box");
const closeBtn = document.querySelector("#close--Btn");

const cartBtn = document.querySelector("#cart--Btn");

searchBtn.addEventListener("click", () => {
  searchBtn.classList.add("active");
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchBtn.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBox.classList.remove("active");
});
