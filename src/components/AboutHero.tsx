import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      y: "50px",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col md:flex-row pt-10 w-full justify-center items-center md:justify-between md:items-stretch space-y-10 md:space-y-0">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="w-full md:w-[40%] block md:hidden mb-6"
      >
        <img
          src="/images/about.png"
          alt="Kavya Sharma"
          className="w-full object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={imageVariants}
        className="w-full md:w-[40%] hidden md:block"
      >
        <Image
          src="/images/about.png"
          alt="Kavya Sharma"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="flex flex-col text-white w-[90%] md:w-[50%] justify-center space-y-6">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="text-4xl font-bold text-white text-center md:text-start"
        >
          About me
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={1}
          className="text-lg text-neutral-400 text-center md:text-start"
        >
          Hi, I&apos;m Kavya Sharma, a Software Engineer with experience in web development and
          Machine Learning. With 1 year of 
          experience, I have worked on Predictive modelling, Natural Language Processing, building 
          scalable backend applications, and solving complex data-driven problems.
        </motion.p>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={2}
          className="text-lg text-neutral-400 text-center md:text-start"
        >
          I enjoy optimizing models, implementing research papers, making data pipelines, designing 
          APIs, or building full-stack applications, Along with exploring applications of ML in different research areas.
        </motion.p>

        {/* <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={3}
          className="text-lg text-neutral-400 text-center md:text-start"
        >
         I'm passionate about working with foundational models, building tools from scratch, implementing research papers, and developing intelligent text analysis solutions for real life use cases.
        </motion.p> */}

        <motion.p 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={4}
          className="text-lg text-neutral-400 text-center md:text-start"
        >
          Let&apos;s build something amazing together! 🚀
        </motion.p>
      </div>
    </div>
  );
};

export default AboutHero;
