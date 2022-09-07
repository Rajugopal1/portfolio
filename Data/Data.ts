import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./Type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>BootStrap</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express, Nest.js </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using  <b>Node API</b> & <b>django-rest-api</b>  ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "problem solver in <b>HackerRank</b> ",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "MySql",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VS.Code",
    level: "80",
  },
];

export const projects: IProject[] = [
  {
    name: "PortFolio",
    description:
      "This application is a portfolio website for my personal projects",
    image_path: "/images/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg",
    deployed_url: "",
    github_url: "https://github.com/Rajugopal1/portfolio",
    category: ["react"],
    key_techs: ["React", "TailwindCSs", "framer-motion"],
  },
  {
    name: "Netflix API",
    description: "This application is a netflix-clone api's",
    image_path: "/images/2772922.png",
    deployed_url: "",
    github_url: "https://github.com/Rajugopal1/netflix-api",
    category: ["node", "express", "mongo"],
    key_techs: ["node.js", "express.js", "mongoDB"],
  },
  {
    name: "Netflix UI",
    description: "This application is a netflix-clone",
    image_path: "/images/thibault-penin-GrzoKN1aqSg-unsplash.jpg",
    deployed_url: "",
    github_url: "https://github.com/Rajugopal1/netflix-api",
    category: ["react"],
    key_techs: ["react.js", "SASS", "react-router-dom"],
  },
  {
    name: "Facebook Clone API",
    description: "This application is a netflix-clone",
    image_path: "/images/timothy-hales-bennett-OwvRB-M3GwE-unsplash.jpg",
    deployed_url: "",
    github_url: "https://github.com/Rajugopal1/facebook-clone",
    category: ["node", "express", "mongo"],
    key_techs: ["node.js", "express.js", "mongoDB"],
  },
];
