import { Stack, Technology } from "./data";

export const printItems = (
  container: HTMLDivElement | null,
  arr: Technology[],
  type: string
) => {
  if (!container) return;

  let html = "";

  arr
    .filter((item) => item.type.toLowerCase() === type.toLowerCase())
    .forEach((item) => {
      if (type === "front-end") {
        html += `
          <div class="main__item item">
            <div class="item__left">
              <img class="item__img" src="${item.smallImg}" alt="${item.name}"
                data-fullscreen="${item.fullscreenImg}">
            </div>
            <div class="item__right">
              <a class="item__link" href="${item.link}" target="_blank">
                Look at git:
              </a>
              <h3>Project name: ${item.name}</h3>
              <span>Stack:</span>
              <ul class="item__list">
                ${item.technologies.map((t) => `<li>${t}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="main__item item">
            <div class="item__left">
              <video src="${item.link}" controls class="item__video"></video>
            </div>
            <div class="item__right">
              <h3>${item.name}</h3>
              <ul class="item__list">
                ${item.technologies.map((t) => `<li>${t}</li>`).join("")}
              </ul>
            </div>
          </div>
        `;
      }
    });

  container.innerHTML = html;
};

export const loadStack = (
  container: HTMLDivElement | null,
  stackData: Stack[]
) => {
  if (!container) return;

  let html = "";
  stackData.forEach((item) => {
    html += `
      <div class="stack__block">
        <h3 class="stack__block-title">${item.title}:</h3>
        <ul class="stack__list">
          ${item.technologies
            .map(
              (tech) => `
                <li class="stack__item">
                  <h4 class="stack__title">${tech.name}</h4>
                  ${
                    tech.imageLink
                      ? `
                      <div class="stack__item-bottom">
                        <div class="stack__img">
                          <img src="${tech.imageLink}" alt="${tech.name}" width="48" height="48">
                        </div>
                      </div>
                    `
                      : ""
                  }
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    `;
  });

  container.innerHTML = html;
};

export const copyToClipboard = (
  value: string,
  successMessage: string,
  container: HTMLDivElement | null,
  containerText: HTMLParagraphElement | null
) => {
  navigator.clipboard
    .writeText(value)
    .then(() => {
      if (container && containerText) {
        container.classList.add("copied-active");
        containerText.textContent = successMessage;
        setTimeout(() => container.classList.remove("copied-active"), 1200);
      }
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
    });
};
