import {
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiMessageSquare,
} from 'react-icons/fi';
export { techCategories } from './skills';

export const personalInfo = {
  name: "Mihir Parida",
  title: "MERN Stack Developer",
  subtitle: "React, Node.js, Express, MongoDB",
  summary:
    "Computer Science student focused on building responsive, accessible, and production-ready web applications.",
  location: "Odisha, India",
  email: "mihirparidaw1@gmail.com",
  github: "https://github.com/Mihir09CS",
  linkedin: "https://www.linkedin.com/in/mihir-parida-43b0aa295",
  resume:
    "https://drive.google.com/file/d/190VvgatysLvXEQ-a-BecX7vFyFe0UXs6/view?usp=drive_link",
  siteUrl: "https://mihirparida.dev/",
  recruiterHighlights: [
    "React and modern JavaScript",
    "REST API and backend development",
    "Clean UI implementation with Tailwind CSS",
    "Strong CS fundamentals and problem solving",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "Gandhi Institute For Technology (GIFT Autonomous)",
    location: "Bhubaneswar",
    graduation: "Expected 2027",
  },
  about: [
    "I'm a Computer Science and Engineering student who enjoys turning product ideas into reliable web experiences.",
    "My current focus is the MERN stack, where I work across interface design, API development, and application structure.",
    "I care about readable code, accessibility, performance, and building projects that solve practical problems.",
  ],
};

export const projects = [
  {
    id: 1,
    title: "DevScribe",
    description:
      "A production-inspired MERN blogging platform with secure authentication, content publishing, social interactions, admin moderation, and performance optimizations.",

    longDescription:
      "Developed a scalable full-stack blogging platform featuring secure authentication, rich content management, social engagement, and an admin dashboard. Built with a focus on clean architecture, RESTful APIs, performance optimization, and production-ready deployment.",

    features: [
      "JWT Authentication & Google OAuth",
      "Blog publishing, editing & media uploads",
      "Comments, likes, bookmarks & follow system",
      "Role-based admin dashboard & content moderation",
      "Redis caching & optimized search",
    ],

    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "JWT",
      "ImageKit",
      "Brevo",
    ],

    githubUrl: "https://github.com/Mihir09CS/MERN_DevScribe",
    liveUrl: "https://devscribe-a.netlify.app/",

    color: "from-blue-500/20 to-cyan-500/20",
    accent: "#3B82F6",
    label: "Featured",
  },

  {
    id: 2,
    title: "Online Quiz Platform",

    description:
      "A full-stack role-based quiz platform for creating, managing, and attempting online assessments with real-time score evaluation.",

    longDescription:
      "Currently developing a scalable MERN-based quiz platform featuring secure authentication, role-based access control, dynamic quiz management, timed assessments, and performance tracking. The project focuses on clean architecture, responsive UI, and a seamless assessment experience.",

    features: [
      "JWT Authentication & Role-based Access",
      "Quiz creation & management",
      "Timed quiz system",
      "Automatic score calculation",
      "Responsive dashboard",
    ],

    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    githubUrl: "https://github.com/Mihir09CS/Online_Quiz_Platform",
    liveUrl: "",

    color: "from-purple-500/20 to-pink-500/20",
    accent: "#8B5CF6",
    label: "In Progress",
  },
  {
    id: 1,

    title: "TrustLensAI",

    description:
      "A full-stack multi-modal deepfake threat intelligence platform for detecting manipulated image, audio, and video content using AI-powered analysis.",

    longDescription:
      "TrustLensAI is a full-stack AI-powered platform built with a microservice architecture using React, Node.js, Express, MongoDB, and FastAPI. The platform integrates image, audio, and video deepfake detection models with secure authentication, threat scoring, forensic scan history, bulk media analysis, role-based dashboards, and system health monitoring. It demonstrates the integration of AI inference into a scalable and production-oriented web application.",

    features: [
      "Image, Audio & Video Deepfake Detection",
      "JWT Authentication & Google OAuth",
      "Role-based User & Admin Dashboard",
      "Threat Score & Risk Classification",
      "Bulk Media Analysis",
      "Forensic Scan History",
      "Analytics Dashboard",
      "FastAPI AI Microservice Integration",
    ],

    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "FastAPI",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "JWT",
    ],

    githubUrl: "https://github.com/Mihir09CS/SenseAI-DeepFake_AI-Detector",
    liveUrl: "",

    color: "from-cyan-500/20 to-blue-600/20",

    accent: "#06B6D4",

    label: "In Development",
  },
  {
    id: 4,
    title: "Krushi Sathi",
    description:
      "An AI-powered smart agriculture platform that combines MERN, Machine Learning, and field officers to help farmers with crop decisions, disease detection, fertilizer recommendations, and farm management.",
    longDescription:
      "Developed a production-oriented full-stack agriculture platform that integrates multiple Machine Learning models with a MERN backend using a microservices architecture. The platform enables farmers to receive AI-powered crop recommendations, fertilizer suggestions, and plant disease detection through image uploads. It also introduces a unique Officer Module that bridges the gap between technology and farmers by assisting with onboarding, prediction verification, field visits, reminders, and report management. Designed with scalability, role-based authentication, prediction history, and future-ready modules like smart irrigation, resilience mode, and carbon credits.",
    features: [
      "Role-based Authentication (Farmer, Officer & Admin)",
      "Crop Recommendation using ML",
      "Fertilizer Recommendation",
      "Plant Disease Detection via Image Upload",
      "Prediction History & Reports",
      "Officer Dashboard for Farmer Assistance",
      "Calendar & Farming Reminders",
      "Image Upload with Multer",
      "REST API-based ML Integration",
      "Responsive Dashboard",
      "Secure JWT Authentication",
      "Scalable Microservices Architecture",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Flask/FastAPI",
      "Machine Learning",
      "JWT",
      "Multer",
      "REST API",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Mihir09CS/Krushi_Sathi",
    liveUrl: "",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "#22C55E",
    label: "In Progress ",
  },
];

export const achievements = [
  {
    icon: FiBriefcase,
    title: 'Full Stack Project Delivery',
    description:
      'Built and completed multiple end-to-end web applications from interface implementation to backend integration.',
  },
  {
    icon: FiMessageSquare,
    title: 'Hackathon Collaboration',
    description:
      'Worked in fast-paced team environments to ship ideas under deadlines and communicate technical tradeoffs clearly.',
  },
  {
    icon: FiAward,
    title: 'NPTEL Certification',
    description:
      'Completed NPTEL Computer Networks coursework to strengthen networking fundamentals and system-level understanding.',
  },
  {
    icon: FiCode,
    title: 'Consistent DSA Practice',
    description:
      'Regularly solve algorithmic problems to improve logic, implementation speed, and interview readiness.',
  },
  {
    icon: FiCpu,
    title: 'Continuous Technical Learning',
    description:
      'Actively expanding knowledge across frontend engineering, backend systems, and core computer science subjects.',
  },
  {
    icon: FiBookOpen,
    title: 'Engineering Foundation',
    description:
      'Building strong fundamentals in DBMS, operating systems, networking, and object-oriented design alongside project work.',
  },
];
