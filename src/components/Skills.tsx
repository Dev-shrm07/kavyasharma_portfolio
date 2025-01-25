import React from "react";
import { motion } from "framer-motion";


import { 
  SiPython, SiCplusplus, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, 
  SiPostgresql, SiMongodb, SiDocker, 
  SiAmazonwebservices, SiTensorflow, SiPytorch, 
  SiScikitlearn, SiNumpy, SiPandas 
} from 'react-icons/si';

const skillIcons = [
  { Icon: SiPython, name: 'Python' },
  { Icon: SiCplusplus, name: 'C++' },

  { Icon: SiJavascript, name: 'JavaScript' },
  { Icon: SiTypescript, name: 'TypeScript' },
  { Icon: SiReact, name: 'React' },
  { Icon: SiNextdotjs, name: 'Next.js' },
  { Icon: SiNodedotjs, name: 'Node.js' },
  { Icon: SiExpress, name: 'Express.js' },
  { Icon: SiPostgresql, name: 'PostgreSQL' },
  { Icon: SiMongodb, name: 'MongoDB' },
  { Icon: SiDocker, name: 'Docker' },
  { Icon: SiAmazonwebservices, name: 'AWS' },
  { Icon: SiTensorflow, name: 'Tensorflow' },
  { Icon: SiPytorch, name: 'PyTorch' },
  { Icon: SiScikitlearn, name: 'Scikit-learn' },
  { Icon: SiNumpy, name: 'NumPy' },
  { Icon: SiPandas, name: 'Pandas' }
];

const SkillsIconFlow = () => {
  return (
    <div className="overflow-hidden w-full relative mt-10">
      <motion.div 
        className="flex space-x-6 py-4"
        animate={{
          x: [0, -1500],
          transition: {
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }
        }}
      >
        {[...skillIcons, ...skillIcons].map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center space-y-2 min-w-[100px]"
            whileHover={{ scale: 1.1 }}
          >
            <skill.Icon size={48} className="text-white/80 hover:text-white" />
            <span className="text-sm text-neutral-400">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};



const Skills = () => {
  return (
    <motion.div
      className="flex flex-col bg-gradient-to-r from-neutral-950 to-neutral-800 border border-white/20 shadow-lg shadow-white/30 min-h-[350px] w-[90%] mt-20 px-6 py-6"
      initial={{ x: "-100%" }}
      whileInView={{ x: "0%" }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {/* Header with Icon and Title */}
      <div className="flex items-center justify-center space-x-3 text-white mb-10">
        <img src="/images/tech.png" className="h-8 w-8" alt="Education Logo" />
        <h1 className="text-3xl font-bold">Technical Skills</h1>
      </div>

      <div className="flex flex-col space-y-5 text-neutral-400">
        <ul>
          <span className="text-gray-300">Programming Languages :</span>
          &nbsp;&nbsp;&nbsp;&nbsp;C++, Python, Java, JavaScript, TypeScript, SQL
        </ul>
        <ul>
          <span className="text-gray-300">Libraries and Frameworks :</span>
          &nbsp;&nbsp;&nbsp;&nbsp;React.js, Next.js, Node.js, Express.js, Stripe.js, FastAPI, Flask, Tensorflow, Pytorch, Keras, HuggingFace, Langchain, OpenAI Gymnasium, Scikit-learn, Pandas, Numpy, Matplotlib
        </ul>
        <ul>
          <span className="text-gray-300">Database :</span>
          &nbsp;&nbsp;&nbsp;&nbsp;Postgre SQL, MongoDB, SnowFlake
        </ul>
        <ul>
          <span className="text-gray-300">DevOps and MLOps:</span>
          &nbsp;&nbsp;&nbsp;&nbsp;Azure DevOps, AWS, Docker, Dataiku, MLflow
        </ul>
      </div>
      <SkillsIconFlow/>
    </motion.div>
  );
};

export default Skills;
