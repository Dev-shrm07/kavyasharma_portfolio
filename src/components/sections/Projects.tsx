"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import HProjectCard from "../ProjectCardAc";
import { motion } from "framer-motion";
import { Projects } from "@/data/projects";

const Project = () => {
  const [projects, setProjects] = useState(Projects);
  const [filteredProjects, setFilteredProjects] = useState(Projects);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const newProjects = projects.filter((project) => {
      return project.type.includes(filter);
    });

    setFilteredProjects(newProjects);
  }, [filter]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex flex-col min-h-[100vh] w-full bg-neutral-950 space-y-5 px-5  pb-10 justify-center  py-20">
      

      <div className="mt-5 flex flex-wrap gap-5 bg-opacity-0 h-[80px] w-[90%] md:w-[50%]">
        <span
          className="bg-zinc-800 text-neutral-300 px-3 py-[5px] cursor-pointer rounded-full text-xs h-[40%] min-w-[10%] font-medium hover:bg-zinc-700 transition-colors"
          onClick={() => {
            setFilter("");
          }}
        >
          All
        </span>
        <span
          className="bg-zinc-800 text-neutral-300 px-3 py-[5px] cursor-pointer rounded-full text-xs  h-[40%] min-w-[10%] font-medium hover:bg-zinc-700 transition-colors"
          onClick={() => {
            setFilter("ml");
          }}
        >
          Machine Learning
        </span>
        <span
          className="bg-zinc-800 text-neutral-300 px-3 py-[5px] cursor-pointer rounded-full text-xs  h-[40%] min-w-[10%] font-medium hover:bg-zinc-700 transition-colors"
          onClick={() => {
            setFilter("wd");
          }}
        >
          Web Development
        </span>
      </div>
      <div className="flex flex-wrap gap-10 md:flex-wrap  w-full items-start  mb-10">
        {filteredProjects.map((project, index) => (
          <div key={index}>
            <HProjectCard
              image={project.image}
              title={project.title}
              desc={project.desc}
              skills={project.skills}
              github={project.github}
              liveUrl={project.liveUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
