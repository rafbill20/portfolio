import hub from "../../public/assets/portofolio/Atma Hub.png";
import kitchen from "../../public/assets/portofolio/Atma Kitchen.png";
import grand from "../../public/assets/portofolio/Grand Atma.png";
import semesta from "../../public/assets/portofolio/Semesta Group.png";

export const portfolioData = [
  {
    id: 1,
    imgSrc: grand,
    imgAlt: "Grand Atma",
    title: "Grand Atma",
    description:
      "Created a website to facilitate customers in making room reservations at the Grand Atma Hotel",
    technologies: ["react", "bootstrap"],
    link: "https://grandatma.vercel.app/",
  },
  {
    id: 2,
    imgSrc: hub,
    imgAlt: "Atma Hub",
    title: "Atma Hub",
    description:
      "Created a website to display a list of movies that are currently showing at Atma Hub, and also add comments for each user who is logged in.",
    technologies: ["react", "laravel", "bootstrap", "mysql"],
    link: "https://github.com/rafaelbilly/PW13_C_11297.git",
  },
  {
    id: 3,
    imgSrc: semesta,
    imgAlt: "Semesta Group",
    title: "Semesta Group",
    description:
      "Created a website to help customers in ordering Event Organizer, and there is also Admin Management in Managing Event Data and Customers Data.",
    technologies: ["laravel", "bootstrap", "mysql"],
    link: "https://github.com/rafaelbilly/PW2023_C_11_Laravel.git",
  },
  {
    id: 4,
    imgSrc: kitchen,
    imgAlt: "Atma Kitchen",
    title: "Atma Kitchen",
    description:
      "Created a website and a management system for Atma Kitchen. The website allows customers to order cakes and drinks, while the management system enables the Admin, Operations Manager, and Owner to efficiently manage product data, raw materials, orders, and employees.",
    technologies: ["react", "laravel", "tailwind", "mysql"],
    link: "https://atmakitchen.vercel.app/",
  },
];
