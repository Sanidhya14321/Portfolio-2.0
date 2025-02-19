import projects1 from "../assets/Project1.png";
import projects2 from "../assets/Project2.png";
import projects3 from "../assets/Project3.jpg";
import projects4 from "../assets/Project4.jpg";
import projects5 from "../assets/projects5.webp";
import projects6 from "../assets/projects6.webp";


import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { label: "Work" , linker:"/work"},
  {  label: "About" , linker:"/about"},
  { label: "Experience",linker:"/experience" },
  { label: "Contact" ,linker :"/contacts"},
];

export const HERO_CONTENT = {
  greeting: "I am a",
  introduction:
    "I’m Sanidhya, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I'm a Detail-driven software developer with a strong base in HTML, CSS, JavaScript and DOM, and MERN stack. Has experience with Python, C, and C++ programming. Special interest in scalable web applications, AI/ML, and future technologies such as blockchain.",
  resumeLinkText: "Download Resume",
  resumeLink: "./resume.pdf",
};

export const PROJECTS = [
  {
    name: "U-tube",
    description: "Youtube Clone created with create-react-app",
    image: projects1,
    link: "https://github.com/your-github/streamerzz",
  },
  {
    name: "Todo App",
    description: "Manage, Prioritize and finish your goals and tasks",
    image: projects2,
    link: "https://github.com/your-github/nutritrack",
  },
  {
    name: "HairRevive",
    description: "A platform for hair regrowth solutions powered by science",
    image: projects3,
    link: "https://github.com/your-github/hairrevive",
  },
  {
    name: "DevDeck",
    description:
      "Interactive dashboard for developers to track coding activity",
    image: projects4,
    link: "https://github.com/your-github/devdeck",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: projects5,
    link: "https://github.com/your-github/fitconnect",
  },
  {
    name: "WellNest",
    description: "A wellness app for mental and physical health improvement",
    image: projects6,
    link: "https://github.com/your-github/wellnest",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Node.js, MongoDB, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — 2027",
    title: "Maharaja Surajmal Institute Of Technology",
    location: "Delhi, India",
    description: ["Studying Computer Science Engineering","Scored 8.56 gpa in First Year"
    ],
  },
  {
    yearRange: "Pass Out 2023",
    title: "Army Public School DK",
    location: "Delhi",
    description: ["PCM with Computer Information",
    ],
  },
];


export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "sanidhya14321@gmail.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/_vats14321/",
      ariaLabel: "Follow me on Twitter",
      icon: "RiInstagramFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/Sanidhya14321",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sanidhya-vats-9344522b7/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Sanidhya Vats. All rights reserved.`,
};
