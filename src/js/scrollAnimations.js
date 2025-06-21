export function initScrollAnimations() {
  document.addEventListener("DOMContentLoaded", () => {
    const hiddenElements = document.querySelectorAll(".stack__inner");
    const simpleElements = document.querySelectorAll(".projects__carts");
    const contactElements = document.querySelectorAll(".contacts");
    const columns = 4;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(hiddenElements).indexOf(entry.target);
            const row = Math.floor(index / columns);
            const col = index % columns;
            const delay = row * 300 + col * 300;

            setTimeout(() => entry.target.classList.add("visible"), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    hiddenElements.forEach((el) => observer.observe(el));

    const simpleObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    [...simpleElements, ...contactElements].forEach((el) =>
      simpleObserver.observe(el)
    );
  });
}
