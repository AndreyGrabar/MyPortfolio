export function initLoadMoreProjects() {
  const projectsData = [
    {
      img: "img/marvel.jpg",
      title: "Marvel Portal",
      tech: "HTML, SCSS, React, API",
      code: "https://github.com/AndreyGrabar/Marvel-Portal",
      live: "https://andreygrabar.github.io/Marvel-Portal/",
    },
    {
      img: "img/food_order.jpg",
      title: "Food Order",
      tech: "HTML, CSS, Node.js, React",
      code: "https://github.com/AndreyGrabar/Food_Order",
      live: "",
    },
    {
      img: "img/childhood.jpg",
      title: "ChildHood",
      tech: "HTML, CSS, WordPress",
      code: "https://github.com/AndreyGrabar/Childhood",
      live: "",
    },
  ];

  const loadMoreBtn = document.getElementById("load_more_btn");
  const projectsGrid = document.getElementById("projects_grid");

  loadMoreBtn.addEventListener("click", () => {
    projectsData.forEach((project) => {
      const projectHTML = `
        <div class="projects__carts">
          <img src="${project.img}" alt="${project.title}" />
          <h3 class="projects__carts-title">${project.title}</h3>
          <p class="projects__carts-text">Tech stack : ${project.tech}</p>
          <div class="projects__carts-links">
            <a
              href="${project.live || "#"}"
              target="_blank"
              class="projects__carts-link-live ${
                !project.live ? "disabled" : ""
              }"
              ${!project.live ? 'tabindex="-1" onclick="return false;"' : ""}
            >
              Live Preview
            </a>
            <a href="${
              project.code
            }" target="_blank" class="projects__carts-link-github">View Code</a>
          </div>
        </div>
      `;
      projectsGrid.insertAdjacentHTML("beforeend", projectHTML);
    });

    const newProjects = projectsGrid.querySelectorAll(
      ".projects__carts:not(.visible)"
    );

    newProjects.forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"));
    });

    loadMoreBtn.style.display = "none";
  });
}
