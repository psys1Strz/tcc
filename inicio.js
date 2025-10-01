// ===== Login =====
const loginBtn = document.getElementById("open-login");
const loginModal = document.getElementById("login-modal");
const closeLogin = document.getElementById("close-login");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.classList.add("show");
});

closeLogin.addEventListener("click", () => {
  loginModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) loginModal.classList.remove("show");
});

// ===== Carrinho =====
const cartBtn = document.getElementById("open-cart");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.classList.add("show");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === cartModal) cartModal.classList.remove("show");
});

// ===== Carrossel =====
const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

nextBtn.addEventListener("click", () => {
  index = (index + 1) % track.children.length;
  track.style.transform = `translateX(${-index * 270}px)`;
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + track.children.length) % track.children.length;
  track.style.transform = `translateX(${-index * 270}px)`;
});
