import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  sela,
  shopify,
  tripguide,
  threejs,
  Amazon,
  AmazonLogo,
  NetflixLogo,
  Netflix,
  MERN,
  Open_university,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Course",
    company_name: "Sela College - Lohamim LeHi-tech program",
    icon: sela,
    iconBg: "white",
    date: "October 2022 - August 2023",
    points: [
      "Full Stack software development program funded by the Israeli ministry of defence.",
      "An intensive course that provided a comprehensive understanding of development tools and techniques like: data structures, algorithms, space and time complexity, object-oriented programming, design patterns and clean code principles.",
      "Completed over 1000 hours of coursework, including hands on projects and applications.",
      "Technologies: JavaScript, TypeScript, Node.js, MongoDB, React, Angular, Tailwind CSS, C#, .NET Framework, ASP.NET MVC, Entity Framework, MSSQL.",
      "Tools: Postman API, Swagger, Git, Github."
    ],
  },
  {
    title: "Diamond Program",
    company_name: "Sela College",
    icon: sela,
    iconBg: "white",
    date: "Jan 2024 - April 2024",
    points: [
      "Additional 3-month advance module 'Yahalom', an exclusive course for graduates of the Full-Stack Software-Development Program, with focus on advanced web development technologies.",
      "Technology Stack: MERN - MongoDB, Express.js, React, Node.js.",
    ],
  },
  {
  title: "Computer Science Studies",
  company_name: "Open University",
  icon: Open_university,
  iconBg: "white",
  date: "November 2024 - Present",
  points: [
    "Deepening my knowledge in Computer Science foundations: data structures, algorithms, system design, operating systems, and computer architecture.",
    "Learning advanced concepts in algorithm analysis, recursion, dynamic programming, graph theory, and computational complexity.",
    "Hands-on coding exercises and algorithmic problem solving in C, C++, Java, and JavaScript.",
    "Building a strong theoretical foundation to complement practical Full Stack Development skills.",
    "Continuously improving problem-solving abilities and preparing for technical interviews."
  ],
},
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "eShop- Amazon Clone",
    description:
      "Developed a clone of the Amazon website, featuring product listings, user authentication, profile management, reset password system, drag & drop and a shopping cart functionality.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: Amazon,
    source_code_link: "https://github.com/NivSolomon/Eshop",
    linkPath: "https://amazon-clone31.vercel.app/",
    linkImage: AmazonLogo,
  },
  {
    name: "MegaFlix- Netflix Clone",
    description:
      "Replicates Netflix's core fetures, including user authentication, personalize contet curation and Search-As-You-Type functionality. Offers live video streaming, quick content previews with react-player, and secure token  authurization with JWT.",
    tags: [
      {
        name: "reactTS",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://github.com/NivSolomon/Shahar-Niv_NetflixProject",
    linkPath: "https://megaflix31.vercel.app/",
    linkImage: NetflixLogo,
  },
];

export { services, technologies, experiences, testimonials, projects };
