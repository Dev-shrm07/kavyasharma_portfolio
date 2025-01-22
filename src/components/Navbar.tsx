"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      className={`shadow-md fixed w-full top-0 z-50 transition-all duration-300 px-2 py-1 md:p-0 bg-black ${
        scrolling ? "bg-opacity-80" : "bg-opacity-0 md:bg-opacity-100"
      }`}
      
    >
      <div className=" justify-between items-center px-6 py-4 text-white hidden md:flex md:justify-between md:items-center">
        <div className="space-x-6 text-base font-light hidden md:flex">
          <span className="hover:text-zinc-400 cursor-pointer">Home</span>
          <span className="hover:text-zinc-400 cursor-pointer">Experience</span>
          <span className="hover:text-zinc-400 cursor-pointer">About</span>
          <span className="hover:text-zinc-400 cursor-pointer">Projects</span>
          <span className="hover:text-zinc-400 cursor-pointer">Contact</span>
        </div>

        <div className="hidden md:flex space-x-6 ml-6">
          <a href="https://www.github.com/Dev-shrm07" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"
              className="w-6 h-6 hover:scale-125 cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/kavyash71102/" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF"
              className="w-6 h-6 hover:scale-125 cursor-pointer"
            />
          </a>
          <a href="https://x.com/kshrm02" target="_blank">
            <img
              src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF"
              className="w-6 h-6 hover:scale-125 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <motion.button
        animate={{ rotate: 360 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none z-50 relative"
      >
        {isOpen ? "" : "☰"}
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-0 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center py-6 space-y-6"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-6 text-white text-2xl"
          >
            ✖
          </button>
          <div className="flex flex-col space-y-4">
            <span className="hover:text-zinc-400 cursor-pointer">Home</span>
            <span className="hover:text-zinc-400 cursor-pointer">
              Experience
            </span>
            <span className="hover:text-zinc-400 cursor-pointer">About</span>
            <span className="hover:text-zinc-400 cursor-pointer">Projects</span>
            <span className="hover:text-zinc-400 cursor-pointer">Contact</span>
          </div>
          <div className="flex space-x-6 mt-4">
            <a href="https://www.github.com/Dev-shrm07" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"
                className="w-6 h-6 hover:scale-125 cursor-pointer"
              />
            </a>
            <a href="https://www.linkedin.com/in/kavyash71102/" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF"
                className="w-6 h-6 hover:scale-125 cursor-pointer"
              />
            </a>
            <a href="https://x.com/kshrm02" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF"
                className="w-6 h-6 hover:scale-125 cursor-pointer"
              />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
