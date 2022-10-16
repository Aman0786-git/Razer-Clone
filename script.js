const searchBtn = document.querySelector("#search--Btn");
const searchBox = document.querySelector("#search--box");
const closeBtn = document.querySelector("#close--Btn");
const cartBtn = document.querySelector("#cart--Btn");
const cartContainer = document.querySelector(".cartContainer");
const bodyArea = document.querySelector("#body");
const main = document.querySelector(".mainSection");

const addActiveSearch = () => {
  searchBtn.classList.add("active");
  searchBox.classList.add("active");
  closeBtn.classList.add("active");
  cartContainer.classList.remove("active");
};

const removeActiveSearch = () => {
  searchBtn.classList.remove("active");
  closeBtn.classList.remove("active");
  searchBox.classList.remove("active");
  main.style = "z-index:1";
};

const removeCart = () => {
  cartContainer.classList.remove("active");
  main.style = "z-index:1";
};

const removeActiveAll = () => {
  removeActiveSearch();
};

searchBtn.addEventListener("click", () => {
  addActiveSearch();
});

closeBtn.addEventListener("click", () => {
  removeActiveAll();
});

cartBtn.addEventListener("click", () => {
  if (searchBox.classList.contains("active")) removeActiveSearch();
  if (cartContainer.classList.contains("active")) {
    removeCart();
  } else {
    main.style = "z-index:-10";
    cartContainer.classList.add("active");
  }
});
