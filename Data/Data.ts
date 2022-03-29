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
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "30",
  },
  {
    Icon: BsCircleFill,
    name: "MySql",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "HTML",
    level: "70",
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
    key_techs: ["React", "TailwindCSs","framer-motion"],
  },
 
];