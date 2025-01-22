import React from "react";
import HProjectCard from "../HProjectcard";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HCardProps {
    image: string;
    title: string;
    desc: string;
    skills: string[];
    github: string;
    liveUrl?: string;
}

const HomeProject = () => {
    const Projects: HCardProps[] = [{
        title: "SkyNetMEC",
        image: "/images/skynet.png",
        desc: "A autonomous UAV-based Multi Edge Computing model built using the MADDPG algorithm for task offloading and trajectory planning. It optimizes task execution by UAVs in a custom environment with UE clusters and fog devices.",
        skills: ['Reinforcement Learning', 'Tensorflow', 'OpenAI Gymnasium', 'Deep Learning', 'Networking'],
        github: "https://github.com/Dev-shrm07/SkyNetMEC"
    },
    {
        title: "PixelStore",
        image: "/images/pixelstore.png",
        desc: "An online peer-to-peer marketplace for stock images, built wiht Stripe integration. Where, users can buy and sell images directly with each other, with features such as account creation, profile editing, buying and creating posts, and more",
        skills: ["React", "Node.js", "Typescript", "MongoDB", "Stripe", "Express"],
        github: "https://github.com/Dev-shrm07/Pixel-Store-Frontend",
        liveUrl: "https://pixelstore.pics/"
    },
    {
        title: "SceneForge AI",
        image: "/images/sceneforge.png",
        desc: "A web-based AI image generation tool that allows users to create stunning visuals by selecting from various artistic styles and providing a description of their desired scene, using Stable Diffusion 3.5 Large.",
        skills: ["Next.js", "TypeScript", "Huggingface"],
        github: "https://github.com/Dev-shrm07/SceneForge",
        liveUrl: "https://sceneforge.site/"
    }];

    return (
        <div className="flex flex-col min-h-[100vh] w-full bg-neutral-950 space-y-10 px-5 py-5 pb-10 justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-3">
                <h1 className="text-4xl font-bold text-white">Featured Projects</h1>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    staggerChildren: 0.2,
                    delayChildren: 0.1,
                }}
                className="flex flex-col md:flex-row justify-around w-full items-center space-y-10 space-x-0 md:space-x-10 md:space-y-0 mb-10"
            >
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <HProjectCard
                            image={project.image}
                            title={project.title}
                            desc={project.desc}
                            skills={project.skills}
                            github={project.github}
                            liveUrl={project.liveUrl}
                        />
                    </motion.div>
                ))}
            </motion.div>
            <Button className="bg-neutral-700 bg-opacity-55 w-40 md:w-60 text-white px-8 font-bold text-[14px] hover:bg-opacity-40 hover:text-white mt-10">
                See More ➜
            </Button>
        </div>
    );
};

export default HomeProject;