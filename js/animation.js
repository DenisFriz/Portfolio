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
// We search three (3) blocks in the DOM node
const BLOCKS = document.querySelectorAll(".block");

// An object that contains all the necessary information for the animation
const Blocks = {
  red: {
    x: 50,
    y: 50,
    xSpeed: 2,
    ySpeed: 1,
  },
  green: {
    x: 450,
    y: 150,
    xSpeed: -1,
    ySpeed: 2,
  },
  blue: {
    x: 650,
    y: 350,
    xSpeed: 1,
    ySpeed: 3,
  },
};

initBlocks(BLOCKS);

function initBlocks(blocks) {
  for (let i = 0; i < blocks.length; i++) {
    // First we find the required class
    const className = blocks[i].classList.value.split(" ")[1];
    // Then takes element of block;
    // Example: className = block__red, then value = red;
    // Remember we are using the BEM methodology
    const value = className.split("__")[1];
    Blocks[value].WidthBlock = blocks[i].offsetWidth;
    Blocks[value].HeightBlock = blocks[i].offsetHeight;
    // We should has real link to DOM node
    // Therefore, we create DOMElement property which it has link to real DOM node
    Blocks[value].DOMElement = blocks[i];
  }
}
function updateBlock(block) {
  block.x += block.xSpeed;
  block.y += block.ySpeed;

  // Here we check if our block is within users' viewport
  if (block.x < 0 || block.x + block.WidthBlock > window.innerWidth) {
    block.xSpeed = -block.xSpeed; // If it's don't, we change x value
  }

  if (block.y < 0 || block.y + block.HeightBlock > window.innerHeight) {
    block.ySpeed = -block.ySpeed; // If it's don't, we change y value
  }
  block.DOMElement.style.transform = `translate(${block.x}px, ${block.y}px)`;
}

function updateAllBlocks() {
  Object.values(Blocks).forEach(updateBlock);
}

function animate() {
  updateAllBlocks();

  requestAnimationFrame(animate);
}

//Start the animation
animate();
