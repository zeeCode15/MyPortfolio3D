// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  project1,
  project2,
  project3,
  project4,
  linkedin,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/zeeCode15",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Competetive Programmer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Development Internship",
    company_name: "Ambitio",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
    "Created RESTful APIs using Django REST framework for the back-end of an account aggregation platform to provide user registration functionality and added multiple bank accounts for money transfer.",
    "Implemented JWT for reinforced token-based authentication and utilized bcrypt for password encryption.",
    "Designed a wallet-based payment using RazorpayX APIs."
    ],
  }
] as const;

// Testimonials
export const TESTIMONIALS = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: user1,
  // },
  // // {
  // //   testimonial:
  // //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  // //   name: "Chris Brown",
  // //   designation: "COO",
  // //   company: "DEF Corp",
  // //   image: user2,
  // // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: user3,
  // },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Food Hut – E Commerce",
    description:
      "Created an ECommerce app which provides user a catalog of products available for purchase in the restaurant. Used Express.js and Node.js to build a RestAPI that handles data flow between the server and client.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/zeeCode15/Food-Commerce-FrontEnd",
    live_site_link: "https://food-commerce-front-end.vercel.app/",
  },
  {
    name: "Split Wise Application",
    description:
      "Built a dynamic React app for easy expense splitting among specified individuals. Used React components for dynamic rendering of input fields, optimizing scalability and user customization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reactRouter",
        color: "green-text-gradient",
      },
      {
        name: "ReactComponent",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/zeeCode15/Cash-Flow",
    live_site_link: "https://cash-flow-flame.vercel.app/",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "Developed a website that helps in visualizing various Sorting and Path Finding Algorithms.Implemented sorting algorithms : merge, quick, selection, bubble, and insertion sort and Breadtdh first Search and Dijkstra's Algorithm for dynamic visualization.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/zeeCode15/Algo-Visualizer",
    live_site_link: "https://zeecode15.github.io/Algo-Visualizer/",
  }
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/mohammad-zeeshan-637842194/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/zeeCode15",
  },
] as const;
