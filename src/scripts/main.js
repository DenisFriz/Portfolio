import { TECHNOLOGY } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const CHANGE_THEME_BTN = document.querySelector(".theme");
  const LIGHT_BTN = document.querySelector(".theme__light");
  const DARK_BTN = document.querySelector(".theme__dark");
  const HTML_TAG = document.querySelector("html");

  if (window.localStorage.getItem("theme") === "dark") {
    HTML_TAG.classList.add("html--dark-mode");
    LIGHT_BTN.classList.remove("theme--active");
    DARK_BTN.classList.add("theme--active");

    DARK_BTN.style.transform = `translate(-80px, 0)`;
  }

  CHANGE_THEME_BTN.addEventListener("click", (e) => {
    const target = e.target;
    let ACTIVE_THEME = target.classList.value.split(" ")[0].split("__")[1];
    if (ACTIVE_THEME === "light") {
      window.localStorage.setItem("theme", "dark");
      LIGHT_BTN.classList.remove("theme--active");
      LIGHT_BTN.classList.add("test-dark");
      DARK_BTN.classList.add("test-dark", "theme--active");
      DARK_BTN.addEventListener("animationend", () => {
        DARK_BTN.classList.remove("test-dark");
        DARK_BTN.style.transform = `translate(-80px, 0)`;
      });
      LIGHT_BTN.addEventListener("animationend", () => {
        LIGHT_BTN.classList.remove("test-dark");
        LIGHT_BTN.style.transform = `translate(-80px, 0)`;
      });
      HTML_TAG.classList.add("html--dark-mode");
    } else if (ACTIVE_THEME === "dark") {
      window.localStorage.setItem("theme", "light");
      DARK_BTN.classList.remove("theme--active");
      DARK_BTN.classList.add("test-dark-reverse");
      LIGHT_BTN.classList.add("test-dark-reverse", "theme--active");
      DARK_BTN.addEventListener("animationend", () => {
        DARK_BTN.classList.remove("test-dark-reverse");
      });
      LIGHT_BTN.addEventListener("animationend", () => {
        LIGHT_BTN.classList.remove("test-dark-reverse");
        LIGHT_BTN.style.transform = `translate(0, 0)`;
      });

      HTML_TAG.classList.remove("html--dark-mode");
    }
  });

  const LOOK_BTN = document.querySelector(".about__btn");

  LOOK_BTN.addEventListener("click", (e) => {
    LOOK_BTN.classList.add("animate");
    setTimeout(() => {
      LOOK_BTN.classList.remove("animate");
    }, 600);
  });

  const VIEW_TYPES = document.querySelector(".view-types");
  const MAIN_LIST = document.querySelector(".main__list");

  VIEW_TYPES.addEventListener("click", (e) => {
    const target = e.target;
    if (target.dataset.view_type === "One column") {
      if (MAIN_LIST.classList.contains("main__list--two-column")) {
        MAIN_LIST.classList.remove("main__list--two-column");
      }
    } else if (target.dataset.view_type === "Two column") {
      if (!MAIN_LIST.classList.contains("main__list--two-column")) {
        MAIN_LIST.classList.add("main__list--two-column");
      }
    }
  });

  //Open fullscreen images
  const MODAL = document.querySelector(".modal");
  const MODAL_IMG = MODAL.querySelector("#fullscreenImage");

  MAIN_LIST.addEventListener("click", (e) => {
    const target = e.target.closest("img[data-fullscreen]");
    if (target) {
      MODAL_IMG.src = target.dataset.fullscreen;
      MODAL.classList.add("active");
    }
  });

  MODAL_IMG.addEventListener("click", () => {
    if (MODAL.classList.contains("active")) {
      MODAL.classList.remove("active");
    }
  });

  const frontEndBtn = document.querySelector(
    "button[data-technology='Front-End']"
  );
  const fullStackBtn = document.querySelector(
    "button[data-technology='Full Stack']"
  );
  let currentT = "front-end";

  frontEndBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentT = "front-end";
    printItems(TECHNOLOGY, "front-end");
    frontEndBtn.classList.add("animate");
    if (fullStackBtn.classList.contains("active")) {
      fullStackBtn.classList.remove("active");
      frontEndBtn.classList.add("active");
    } else {
      frontEndBtn.classList.add("active");
    }
    renderTechStack("front-end");
    setTimeout(() => {
      frontEndBtn.classList.remove("animate");
    }, 600);
  });

  fullStackBtn.addEventListener("click", (e) => {
    e.preventDefault();
    currentT = "Full Stack";
    printItems(TECHNOLOGY, "Full Stack");
    fullStackBtn.classList.add("animate");
    if (frontEndBtn.classList.contains("active")) {
      frontEndBtn.classList.remove("active");
      fullStackBtn.classList.add("active");
    } else {
      fullStackBtn.classList.add("active");
    }
    renderTechStack("Full Stack");
    setTimeout(() => {
      fullStackBtn.classList.remove("animate");
    }, 600);
  });

  printItems(TECHNOLOGY, currentT, ["HTML", "React"]);

  function printItems(arr, type, requiredTechs = []) {
    let t = "";

    const filteredItems = arr.filter(
      (item) =>
        item.type === type &&
        requiredTechs.some((tech) => item.technologies.includes(tech))
    );

    if (type == "front-end") {
      filteredItems.forEach((item) => {
        t += `
        <div class="main__item item">
                        <div class="item__left">
                            <img class="item__img" src="${
                              item.smallImg
                            }" alt="${item.name}"
                                data-fullscreen="${item.fullscreenImg}">
                        </div>
                        <div class="item__right">
                            <a class="item__link" href="${
                              item.link
                            }" target="_blank">
                                Look at git:
                            </a>
                            <h3>${item.name}</h3>
                            <ul class="item__list">
                                ${item.technologies
                                  .map((t) => `<li>${t}</li>`)
                                  .join("")}
                            </ul>
                        </div>
                    </div>
        `;
      });
    } else if (type == "Full Stack") {
      filteredItems.forEach((item) => {
        t += `
              <div class="main__item item">
                              <div class="item__left">
                                      <video src="${
                                        item.link
                                      }" controls class="item__video"></video>
                              </div>
                              <div class="item__right">
                                  <h3>${item.name}</h3>
                                  <ul class="item__list">
                                      ${item.technologies
                                        .map((t) => `<li>${t}</li>`)
                                        .join("")}
                                  </ul>
                              </div>
                          </div>
              `;
      });
    }

    MAIN_LIST.innerHTML = t;
  }

  function getSelectedTechnologies() {
    const selectedTech = document.querySelectorAll(
      "input[name='stack']:checked"
    );
    return Array.from(selectedTech).map((checkbox) => checkbox.id);
  }

  const searchSelectedTechBtn = document.querySelector(".projects__btn");

  searchSelectedTechBtn.addEventListener("click", () => {
    printItems(TECHNOLOGY, currentT, getSelectedTechnologies());
  });

  const stackContainer = document.querySelector(".projects__stack");

  function renderTechStack(type) {
    stackContainer.innerHTML = ""; // Очистка контейнера

    // Собираем технологии по выбранной категории
    const filteredTechs = [
      ...new Set(
        TECHNOLOGY.filter((project) => project.type === type).flatMap(
          (project) => project.technologies
        )
      ),
    ];

    // Создаем чекбоксы
    filteredTechs.forEach((tech) => {
      const stackItem = document.createElement("div");
      stackItem.classList.add("projects__stack-item");

      const input = document.createElement("input");
      input.type = "checkbox";
      input.id = tech;
      input.name = "stack";
      input.checked = tech === "HTML" || tech === "React" ? true : false;

      const label = document.createElement("label");
      label.htmlFor = tech;
      label.textContent = tech;

      stackItem.appendChild(input);
      stackItem.appendChild(label);
      stackContainer.appendChild(stackItem);
    });
  }

  renderTechStack("front-end");
});
