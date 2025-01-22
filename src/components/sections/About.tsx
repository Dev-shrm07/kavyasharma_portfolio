import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] py-16 flex flex-col items-center justify-center text-center px-6 bg-gradient-to-l from-neutral-900 to-black text-white space-y-14 overflow-hidden">
    
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-white"
        initial={{ x: "0%" }}
        whileInView={{ x: "100%" }} 
        transition={{ duration: 2, ease: "easeInOut" }} 
        viewport={{ once: true }} 
      />

      <h1 className="text-4xl sm:text-5xl font-extrabold mt-6 relative z-10">
        Building Intelligent Systems & Scalable Applications
      </h1>

      <p className="mt-4 text-lg text-neutral-400 max-w-2xl relative z-10">
        Software Engineer specializing in Machine Learning, Predictive
        Modelling, and Full-Stack Development. Passionate about Generative AI,
        Natural Language Processing, Cloud, and solving real-world problems.
      </p>

      <Button className="bg-white w-40 md:w-60 text-black px-8 font-bold text-[14px] hover:bg-neutral-300 hover:bg-opacity-90 hover:text-black mt-15 relative z-10">
        Learn more about me
      </Button>
    </section>
  );
};

export default HeroSection;
