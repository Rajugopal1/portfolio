import Bar from "../components/Bar";
import { languages, tools } from "../Data/Data";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const resume = () => {
 
    return (
       
        <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
            B.com(computers applications) 
            </h5>
            <p className="font-semibold">krishna Chaitanya Degree and PG (Vikrama Simphapuri University (2017-2020)</p>
            <p className="my-3">
               I have done my graduation in B.com(computers applications) 
              from krishna Chaitanya Degree and PG (Vikrama Simphapuri University)
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial='initial' animate='animate'>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">BackEnd Developer Jr.</h5>
            <p className="font-semibold">Amoghnya Tech Solutions</p>
            <p className="my-3">I have relavant 6 months of Experience in Node.js</p>
            {/* <p className="my-3">I dont know why I am doing this job</p> */}
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
    )
}

export default resume
