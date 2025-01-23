import React from "react";
import { motion } from "framer-motion";
import { once } from "events";
const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="flex flex-col bg-gradient-to-r from-neutral-950 to-neutral-800 border border-white/20 shadow-lg shadow-white/30 min-h-[250px] w-[90%] mt-20 px-6 py-6"
      initial={{x:"100%"}}
      animate={{x:"0%"}}
    //   variants={containerVariants}
      transition={{ duration: 1.5 }}
      viewport={{once:true}}
    >
      {/* Header with Icon and Title */}
      <div className="flex items-center justify-center space-x-3 text-white mb-10">
        <img
          src="/images/education.png"
          className="h-8 w-8"
          alt="Education Logo"
        />
        <h1 className="text-3xl font-bold">Education</h1>
      </div>

      {/* University & Degree on Left, Year on Right */}
      <div className="flex flex-col md:flex-row  md:justify-between md:items-center w-full text-white text-lg font-bold mb-5">
        <div className="text-center md:text-left">
          Delhi Technological University: Bachelor's of Technology, Engineering
          Physics
        </div>
        <div className=" text-center md:text-right">2020-2024</div>
      </div>

      {/* Additional Details */}
      <div className="flex flex-col space-y-5 text-neutral-400">
        <ul><span className="text-gray-300">Grade : </span>8.78 CGPA</ul>
        <ul><span className="text-gray-300">Relevant coursework : </span>
          Operating Systems, Machine Learning, Database
          Management Systems, Object Oriented Programming, Semiconductor
          Devices, Microwave Engineering, Fiber Optics, Quantum Information and
          Computing.
        </ul>
        <ul>
         <span className="text-gray-300">Research Work : </span>Kite Shaped Nanoantenna for Electric Field Enhancement,
          International Conference on Physics (ICP), 2024
        </ul>
      </div>
    </motion.div>
  );
};

export default Education;
