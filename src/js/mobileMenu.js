const mobileMenu = () => {
  const menuContainer = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".mobile-menu__toggle");
  const menuLink = document.querySelectorAll(".mobile-menu__link");

  menu.addEventListener("click", () => {
    menuContainer.classList.toggle("change");
  });

  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      menuContainer.classList.remove("change");
    });
  });
};

export default mobileMenu;
