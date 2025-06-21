export function initSmoothScroll() {
  function smoothScroll(selector) {
    document.querySelectorAll(selector).forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offset = 120;
          const targetPosition = targetElement.offsetTop;

          window.scrollTo({
            top: targetPosition - offset,
            behavior: "smooth",
          });
        }
      });
    });
  }

  smoothScroll(".menu__list-item a");
  smoothScroll(".footer-link a");
}
