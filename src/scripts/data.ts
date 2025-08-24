export type Technology = {
  name: string;
  technologies: string[];
  link: string;
  smallImg: string;
  fullscreenImg: string;
  type: string;
};

export const TECHNOLOGY: Technology[] = [
  {
    name: "Weather site",
    technologies: ["React", "Typescript", "React-query", "SCSS module", "Vite"],
    link: "https://denisfriz.github.io/Weather-site/",
    smallImg: "./img/Weather-main.JPG",
    fullscreenImg: "./img/Weather-main.JPG",
    type: "front-end",
  },
  {
    name: "FlowerLover",
    technologies: ["HTML", "SCSS", "Typescript", "Gulp", "Webpack"],
    link: "https://denisfriz.github.io/Flowers/",
    smallImg: "./img/FlowerLover_main.JPG",
    fullscreenImg: "./img/FlowerLover_fullscreen.png",
    type: "front-end",
  },
  {
    name: "HorseClub",
    technologies: ["HTML", "SCSS", "JS", "Webpack"],
    link: "https://denisfriz.github.io/HorseClub/",
    smallImg: "./img/HorseClub-main.JPG",
    fullscreenImg: "./img/HorseClub-fullscreen.png",
    type: "front-end",
  },
  {
    name: "Jadoo",
    technologies: ["HTML", "SCSS", "JS", "Gulp"],
    link: "https://denisfriz.github.io/Jadoo/",
    smallImg: "./img/Jadoo-main.JPG",
    fullscreenImg: "./img/Jadoo-fullscreen.png",
    type: "front-end",
  },
  {
    name: "London",
    technologies: ["HTML", "SCSS", "JS", "Bootstrap", "Webpack"],
    link: "https://denisfriz.github.io/London/",
    smallImg: "./img/London-main.JPG",
    fullscreenImg: "./img/London-fullscreen.png",
    type: "front-end",
  },
  {
    name: "Medical",
    technologies: ["HTML", "SASS", "JS", "Webpack"],
    link: "https://denisfriz.github.io/Medical/",
    smallImg: "./img/Medical-main.JPG",
    fullscreenImg: "./img/Medical-fullscreen.png",
    type: "front-end",
  },
  {
    name: "Movies",
    technologies: ["React", "RTK Query", "Typescript", "Material UI", "Vite"],
    link: "https://denisfriz.github.io/MovieDB/",
    smallImg: "./img/Movies-main.JPG",
    fullscreenImg: "./img/Movies-fullscreen.png",
    type: "front-end",
  },
  {
    name: "Organic",
    technologies: ["HTML", "SCSS", "JS", "Gulp"],
    link: "https://denisfriz.github.io/Organic/",
    smallImg: "./img/Organic-main.JPG",
    fullscreenImg: "./img/Organic-fullscreen.png",
    type: "front-end",
  },
  {
    name: "Helyfly",
    technologies: ["HTML", "SCSS", "JS", "Webpack"],
    link: "https://denisfriz.github.io/Helyfly/",
    smallImg: "./img/Helyfly-main.JPG",
    fullscreenImg: "./img/Helyfly-fullscreen.png",
    type: "front-end",
  },
  {
    name: "WPM (Words per minute)",
    technologies: ["HTML", "SCSS", "JS"],
    link: "https://denisfriz.github.io/WPM/",
    smallImg: "./img/WPM-main.JPG",
    fullscreenImg: "./img/WPM-fullscreen.png",
    type: "front-end",
  },
  {
    name: "Yoga",
    technologies: ["HTML", "SCSS", "JS", "Webpack"],
    link: "https://denisfriz.github.io/Yoga/",
    smallImg: "./img/Yoga-main.JPG",
    fullscreenImg: "./img/Yoga-fullscreen.png",
    type: "front-end",
  },
  {
    name: "AppLab",
    technologies: ["HTML", "SASS", "JS", "Webpack"],
    link: "https://denisfriz.github.io/AppLab/",
    smallImg: "./img/AppLab-main.JPG",
    fullscreenImg: "./img/AppLab-fullscreen.png",
    type: "front-end",
  },
  {
    name: "FakeSpotify",
    technologies: ["React", "RTK Query", "Typescript", "SCSS", "Vite"],
    link: "./video/FakeSpotify.mp4",
    smallImg: "",
    fullscreenImg: "",
    type: "videos",
  },
  {
    name: "Quiz",
    technologies: ["React", "Typescript", "MUI", "Vite"],
    link: "./video/Quiz.mp4",
    smallImg: "",
    fullscreenImg: "",
    type: "videos",
  },
  {
    name: "Vimo",
    technologies: [
      "React",
      "Redux",
      "Typescript",
      "MUI",
      "PostgreSql",
      "Node JS",
    ],
    link: "./video/Vimo.mp4",
    smallImg: "",
    fullscreenImg: "",
    type: "videos",
  },
];

export type TechnologyItem = {
  name: string;
  imageLink?: string;
};

export type Stack = {
  title: string;
  technologies: TechnologyItem[];
};

export const STACK: Stack[] = [
  {
    title: "Front-end languages",
    technologies: [
      { name: "HTML", imageLink: "img/icons/html-icon.png" },
      { name: "CSS", imageLink: "img/icons/css-icon.png" },
      { name: "SCSS / SASS", imageLink: "img/icons/sass-icon.png" },
      { name: "JavaScript", imageLink: "img/icons/js-icon.png" },
      { name: "Typescript", imageLink: "img/icons/ts-icon.png" },
      { name: "React", imageLink: "img/icons/react-icon.png" },
      { name: "Ant Design", imageLink: "img/icons/ant-design-icon.png" },
      { name: "Bootstrap", imageLink: "img/icons/bootstrap-icon.png" },
      { name: "MUI", imageLink: "img/icons/mui-icon.jpg" },
      { name: "Tailwind CSS", imageLink: "img/icons/tailwindcss-icon.png" },
    ],
  },
  {
    title: "Front-end frameworks",
    technologies: [
      { name: "Next.js", imageLink: "img/icons/next-js-icon.png" },
      { name: "Vue.js", imageLink: "img/icons/vue-js-icon.png" },
    ],
  },
  {
    title: "State management libraries",
    technologies: [
      { name: "Redux / RTK", imageLink: "img/icons/redux-icon.png" },
      { name: "Zustand", imageLink: "img/icons/redux-icon.png" },
      { name: "Pinia", imageLink: "img/icons/pinia-icon.png" },
    ],
  },
  {
    title: "Back-end languages",
    technologies: [
      { name: "Node.js", imageLink: "img/icons/node-js-icon.png" },
      { name: "Python", imageLink: "img/icons/python-icon.png" },
    ],
  },
  {
    title: "Back-end frameworks",
    technologies: [
      { name: "Express.js", imageLink: "img/icons/express-js-icon.png" },
      { name: "NestJS", imageLink: "img/icons/nestjs-icon.png" },
      { name: "FastAPI", imageLink: "img/icons/fastapi-icon.png" },
    ],
  },
  {
    title: "Build automation tools",
    technologies: [
      { name: "Gulp", imageLink: "img/icons/gulp-icon.png" },
      { name: "Webpack", imageLink: "img/icons/webpack-icon.png" },
      { name: "Vite", imageLink: "img/icons/vite-icon.png" },
      { name: "Git", imageLink: "img/icons/git-icon.png" },
    ],
  },
  {
    title: "Testing library",
    technologies: [
      { name: "React testing library" },
      { name: "Vitest" },
      { name: "Jest" },
    ],
  },
  {
    title: "Database query language",
    technologies: [{ name: "SQL", imageLink: "img/icons/sql-icon.png" }],
  },
  {
    title: "RDBMS",
    technologies: [
      { name: "PostgreSQL", imageLink: "img/icons/postgre-sql-icon.png" },
      { name: "SQLite", imageLink: "img/icons/sqlite-icon.png" },
    ],
  },
  {
    title: "Other technologies",
    technologies: [
      { name: "GraphQL", imageLink: "img/icons/graphql-icon.png" },
      { name: "Socket.IO", imageLink: "img/icons/socket-io-icon.png" },
    ],
  },
];
