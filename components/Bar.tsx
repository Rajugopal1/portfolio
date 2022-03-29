import { FunctionComponent } from "react";

import { Skill } from "../Data/Type";
import { motion } from "framer-motion";

const Bar: FunctionComponent<{ value: Skill }> = ({
  value: { Icon, level, name },
}) => {
  const bar_width = `${level}%`;

  const varaints = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        damping: 10,
        stiffness: 100,
      }
    }
  }
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full ">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-500"
        style={{
          width: bar_width,
        }}
        variants={varaints}
        initial="initial"
        animate="animate"
      >
        <Icon className="mr-3" /> {name}
      </motion.div>
    </div>
  );
};
export default Bar;