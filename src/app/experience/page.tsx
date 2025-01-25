"use client";
import React from "react";
import Timeline from "@/components/Experience";
const paje = () => {
  return (
    <div className="flex flex-col min-h-[100vh] pt-20 bg-neutral-950 justify-center items-center">
      <div className="flex items-center justify-center space-x-3 text-white mb-10">
        <img
          src="/images/wokr.png"
          className="h-8 w-8"
          alt="Education Logo"
        />
        <h1 className="text-3xl font-bold">Work Experience</h1>
      </div>
      <Timeline />
    </div>
  );
};

export default paje;
