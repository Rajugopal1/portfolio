import { useState } from "react";
import { stagger ,fadeUp} from "../animations";
import ProjectCard from "../components/ProjecctCard";
import ProjectsNavbar from "../components/ProjectNavbar";
import { projects as projectsData } from "../Data/Data";
import { Category } from "../Data/Type";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (  
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
      <ProjectsNavbar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />

      <motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial='initial' animate='animate'>
        {projects.map((project,i) => (
          <>
          <motion.div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200" variants={fadeUp} key={i}>
          <ProjectCard project={project}  />
        </motion.div>
        </>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;