import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(max-width: 900px)", () => {
  const tlLoader = gsap.timeline();

  tlLoader
    .set("body", {
      overflow: "hidden",
    })
    .set(".loader__text", { opacity: 0, yPercent: -200 })
    .set(".loader__img", { opacity: 0, xPercent: -100 })
    .set(".loader__horses-img", { opacity: 0, xPercent: -100 })
    .set(".loader__organic-img", { opacity: 0, yPercent: 100 })
    .set(".loader__applab-img", { opacity: 0, xPercent: 100 })
    .set(".loader__item", { xPercent: -100 })
    .to(".loader__item", {
      xPercent: 0,
      duration: 0.3,
      stagger: 0.45,
    })
    .to(".loader__text", {
      yPercent: 0,
      opacity: 1,
      duration: 0.6,
    })
    .to(".loader__img", {
      opacity: 1,
      xPercent: -50,
    })
    .to(".loader__horses-img", {
      opacity: 1,
      xPercent: -50,
      rotate: 347,
    })
    .to(".loader__organic-img", {
      opacity: 1,
      yPercent: -50,
    })
    .to(".loader__applab-img", {
      opacity: 1,
      xPercent: -50,
    })
    .to(".loader__text", {
      xPercent: 100,
      opacity: 0,
    })
    .to(".loader__img", {
      opacity: 0,
      xPercent: -100,
      duration: 0.5,
    })
    .to(".loader__horses-img", {
      opacity: 0,
      xPercent: -100,
      duration: 0.3,
    })
    .to(".loader__organic-img", {
      yPercent: 100,
      opacity: 0,
      duration: 0.3,
    })
    .to(".loader__applab-img", {
      xPercent: 100,
      opacity: 0,
      duration: 0.3,
    })
    .to(".loader__item", {
      xPercent: -100,
      stagger: 0.35,
      duration: 0.3,
    })
    .to(
      ".loader",
      {
        opacity: 0,
        xPercent: -100,
      },
      "-=0.1"
    )
    .to("body", {
      overflowX: "hidden",
      overflowY: "visible",
    });

  return () => {
    tlLoader.kill();
  };
});

mm.add("(min-width: 901px)", () => {
  const tlLoader = gsap.timeline();

  tlLoader
    .set("body", {
      overflow: "hidden",
    })
    .set(".loader__text", { opacity: 0, xPercent: -200 })
    .set(".loader__img", { opacity: 0, yPercent: -100 })
    .set(".loader__horses-img", { opacity: 0, xPercent: 100, yPercent: 100 })
    .set(".loader__organic-img", { opacity: 0, yPercent: 100 })
    .set(".loader__applab-img", { opacity: 0, xPercent: -100 })
    .set(".loader__item", { yPercent: -100 })
    .to(".loader__item", {
      yPercent: 0,
      duration: 0.3,
      stagger: 0.45,
    })
    .to(".loader__text", {
      xPercent: 0,
      opacity: 1,
      duration: 0.6,
    })
    .to(".loader__img", {
      opacity: 1,
      yPercent: -50,
      xPercent: -50,
    })
    .to(".loader__horses-img", {
      opacity: 1,
      yPercent: -50,
      xPercent: -50,
      rotate: 347,
    })
    .to(".loader__organic-img", {
      opacity: 1,
      yPercent: -50,
      xPercent: -50,
    })
    .to(".loader__applab-img", {
      opacity: 1,
      yPercent: -50,
      xPercent: -50,
    })
    .to(".loader__text", {
      yPercent: -100,
      opacity: 0,
    })
    .to(".loader__img", {
      opacity: 0,
      duration: 0.5,
      scale: 0.5,
    })
    .to(".loader__horses-img", {
      xPercent: -100,
      opacity: 0,
      duration: 0.3,
    })
    .to(".loader__organic-img", {
      yPercent: -100,
      opacity: 0,
      duration: 0.3,
    })
    .to(".loader__applab-img", {
      xPercent: -80,
      yPercent: 50,
      opacity: 0,
      duration: 0.3,
    })
    .to(".loader__item", {
      yPercent: -100,
      stagger: 0.35,
      duration: 0.3,
    })
    .to(
      ".loader",
      {
        opacity: 0,
        xPercent: -100,
      },
      "-=0.1"
    )
    .to("body", {
      overflowX: "hidden",
      overflowY: "visible",
    });

  return () => {
    tlLoader.kill();
  };
});

function animate() {
  requestAnimationFrame(animate);
}

animate();
