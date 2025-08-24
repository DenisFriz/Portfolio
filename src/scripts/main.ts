import { TECHNOLOGY, STACK } from "./data";
import { copyToClipboard, loadStack, printItems } from "./functions";

document.addEventListener("DOMContentLoaded", () => {
  // About section - start
  const ABOUT_TEL = document.querySelector(
    ".about__tel"
  ) as HTMLParagraphElement | null;
  const ABOUT_IMG = ABOUT_TEL?.querySelector("img");

  ABOUT_IMG?.addEventListener("click", () => {
    const value = ABOUT_TEL?.textContent || "";

    copyToClipboard(value, "Phone number was copied", COPIED, COPIED_TEXT);
  });

  const LOOK_BTN = document.querySelector(
    ".about__btn"
  ) as HTMLLinkElement | null;

  LOOK_BTN?.addEventListener("click", () => {
    LOOK_BTN.classList.add("animate");
    setTimeout(() => {
      LOOK_BTN.classList.remove("animate");
    }, 600);
  });

  // About section - end

  // Contacts section - start

  const CONTACT_BUTTON = document.querySelector(
    ".contacts"
  ) as HTMLDivElement | null;
  const CONTACT_LIST = CONTACT_BUTTON?.querySelector(
    ".contacts__list"
  ) as HTMLUListElement | null;
  const CONTACT_DATA = document.querySelector(
    "[data-contact]"
  ) as HTMLElement | null;
  const COPIED = document.querySelector(".copied") as HTMLDivElement | null;
  const COPIED_TEXT = COPIED?.querySelector(
    ".copied__text"
  ) as HTMLParagraphElement | null;

  CONTACT_BUTTON?.addEventListener("click", () => {
    CONTACT_LIST?.classList.toggle("contacts__list-active");
  });

  CONTACT_LIST?.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  CONTACT_DATA?.addEventListener("click", (e) => {
    e.stopPropagation();

    const value = CONTACT_DATA.getAttribute("data-contact") || "";

    copyToClipboard(value, "Gmail was copied", COPIED, COPIED_TEXT);
  });

  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;

    if (
      CONTACT_LIST?.classList.contains("contacts__list-active") &&
      !CONTACT_BUTTON?.contains(target) &&
      !CONTACT_LIST?.contains(target)
    ) {
      CONTACT_LIST.classList.remove("contacts__list-active");
    }
  });

  // Contacts section - end

  // Stack section - start

  const STACK_CONTAINER = document.querySelector(
    ".stack__container"
  ) as HTMLDivElement | null;

  loadStack(STACK_CONTAINER, STACK);

  // Stack section - end

  // Projects section - start

  const MAIN_LIST = document.querySelector(
    ".main__list"
  ) as HTMLDivElement | null;

  const MODAL = document.querySelector(".modal") as HTMLDivElement | null;
  const MODAL_IMG = MODAL?.querySelector(
    "#fullscreenImage"
  ) as HTMLImageElement | null;

  MODAL?.addEventListener("click", (e) => {
    if (e.target === MODAL) {
      MODAL.classList.remove("active");
    }
  });

  MAIN_LIST?.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement | null)?.closest(
      "img[data-fullscreen]"
    );
    if (target instanceof HTMLImageElement && MODAL && MODAL_IMG) {
      MODAL_IMG.src = target.dataset.fullscreen || "";
      MODAL.classList.add("active");
    }
  });

  const frontEndBtn = document.querySelector(
    "button[data-technology='Front-End']"
  ) as HTMLButtonElement | null;
  const fullStackBtn = document.querySelector(
    "button[data-technology='Full Stack']"
  ) as HTMLButtonElement | null;

  let currentT = "front-end";

  frontEndBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    currentT = "front-end";
    printItems(MAIN_LIST, TECHNOLOGY, "front-end");
    frontEndBtn.classList.add("animate");
    if (fullStackBtn?.classList.contains("active")) {
      fullStackBtn.classList.remove("active");
      frontEndBtn.classList.add("active");
    } else {
      frontEndBtn.classList.add("active");
    }
    setTimeout(() => {
      frontEndBtn.classList.remove("animate");
    }, 600);
  });

  fullStackBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    currentT = "videos";
    printItems(MAIN_LIST, TECHNOLOGY, "videos");
    fullStackBtn.classList.add("animate");
    if (frontEndBtn?.classList.contains("active")) {
      frontEndBtn.classList.remove("active");
      fullStackBtn.classList.add("active");
    } else {
      fullStackBtn.classList.add("active");
    }
    setTimeout(() => {
      fullStackBtn.classList.remove("animate");
    }, 600);
  });

  printItems(MAIN_LIST, TECHNOLOGY, currentT);

  // Projects section - end
});
