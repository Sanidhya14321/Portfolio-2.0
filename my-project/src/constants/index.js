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
  { label: "Education",linker:"/education" },
  { label: "Contact" ,linker :"/contacts"},
];

export const HERO_CONTENT = {
  greeting: "Hi, I am Sanidhya",
  introduction:
    "A software developer",
  description:
    "I am from India and I am a Computer Science student at Maharaja Surajmal Institute Of Technology.",
  resumeLinkText: "Download Resume",
  resumeLink: "/Sanidhya_Vats.pdf",
};


export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a frontend developer with expertise in React, Node.js, MongoDB, and Tailwind CSS. I build scalable, high-performance web applications with clean, maintainable code. I focus on creating responsive interfaces and collaborating with teams to align development with business goals. Always learning and adapting to new technologies, I ensure efficient and modern solutions.",
  ],
};

export const Education = [
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
  }
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
