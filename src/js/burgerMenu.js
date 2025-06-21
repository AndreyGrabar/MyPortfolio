export function initBurgerMenu() {
  const menuBtn = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");
  const menuItems = document.querySelectorAll(".header__nav ul li");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menuBtn.classList.toggle("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("open");
      menuBtn.classList.remove("active");
    });
  });
}
