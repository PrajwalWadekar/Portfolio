import project1 from "./assets/projects/project-1.png";
import project2 from "./assets/projects/project-2.png";
import project3 from "./assets/projects/project-3.png";
import project4 from "./assets/projects/project-4.png";

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
    title: "NxtResume",
    image: project2,
    description:
      "It is a feature-rich, real-time resume builder tailored for modern job seekers to craft elegant and professional resumes effortlessly with various themes. It offers dynamic, section-wise inputs for education, experience, projects, and skills — with instant live preview, mobile responsiveness, and one-click PDF export built using MERN stack.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind css"],
  },
  {
    title: "Carbon Neutrality Platform",
    image: project1,
    description:
      "A powerful and intuitive web dashboard designed for visualizing and managing carbon emissions in coal mining operations. It enables mine owners to analyze fuel usage, monitor emissions in real-time, and compare data against environmental standards — all through clean, interactive visualizations",
    technologies: ["React.js", "Tailwind css"],
  },
  {
    title: "Authify",
    image: project3,
    description:
      "Authify is a secure and modern MERN-based authentication system featuring full user auth flow with email verification, password reset, and protected routes. Implements JWT-based security, authentication checks, and real-time email notifications with a responsive React + Tailwind UI. Built to demonstrate production-ready practices like bcrypt encryption,  and clean UX.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind css"],
  },
  {
    title: "MERN To-Do App",
    image: project4,
    description:
      "A full-stack task management application built with the MERN stack that enables users to efficiently create, update, delete, and track tasks in real time. This project demonstrates essential CRUD operations, state management, and backend integration with a clean, responsive UI.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind css"],
  },
];

export const CONTACT = {
  address: "Karnataka, India ",
  phoneNo: "",
  email: "prajwalvwadekar@gmail.com",
};
