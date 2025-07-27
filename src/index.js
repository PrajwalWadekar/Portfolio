import project1 from "./assets/projects/project-1.jpg";
import project2 from "./assets/projects/project-2.jpg";
import project3 from "./assets/projects/project-3.jpg";
import project4 from "./assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a full-stack developer (MERN) with a knack for crafting robust and scalable web applications. I’ve honed my skills in front-end technologies like React.js, back-end with Node.js and Express.js, and databases like MongoDB and MySQL through various hackathons and academic projects. I aim to build impactful digital solutions that drive growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React , Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active and exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "December-2024",
    role: "Winner of Smart India Hackathon 2024",
    company: "Govt of India.",
    description: `Developed a comprehensive solution for carbon footprint management in indian coal mines. The system quantified emissions, evaluated the role of carbon sinks in maintaining environmental balance, and provided actionable recommendations such as afforestation and integrating renewable energy sources.`,
    technologies: ["React.js", "Tailwind css","Javascript"],
  },
  {
    year: "April-2024",
    role: "CodeFiesta 5.0",
    company: "National Level Hackathon",
    description: `Competed in a 24-hour hackathon focused on building innovative solutions to improve campus connectivity. Contributed to designing and prototyping the Campus Connect platform, enhancing my skills in collaboration, problem-solving, and working efficiently under pressure`,
    technologies: ["HTML", "CSS", "Javascript", "mySQL"]  ,
  },
  {
    year: "Febuary-2024",
    role: "Techventure Fiesta",
    company: "JCET, Belagavi",
    description: `Participated in an intense 3-hour hackathon, TechVenture Fiesta 2024 at Jain College of Engineering and Technology, Belagavi. Built a functional solution under tight time constraints, demonstrating fast thinking, teamwork, and adaptability in a high-pressure environment`,
    technologies: ["HTML", "CSS", "Javascript"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
