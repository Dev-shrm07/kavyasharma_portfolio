import React from "react";

const Education = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-neutral-950 to-neutral-800 border border-white/20 shadow-lg shadow-white/30 min-h-[250px] w-[90%] mt-20 px-6 py-6">
      
      {/* Header with Icon and Title */}
      <div className="flex items-center space-x-3 text-white mb-5">
        <img src="/images/education.png" className="h-8 w-8" alt="Education Logo" />
        <h1 className="text-3xl font-bold">Education</h1>
      </div>

      {/* University & Degree on Left, Year on Right */}
      <div className="flex flex-col md:flex-row  md:justify-between md:items-center w-full text-white text-lg font-bold mb-3">
        <div className="text-center md:text-left">Delhi Technological University: Bachelor's of Technology, Engineering Physics</div>
        <div className=" text-center md:text-right">2020-2024</div>
      </div>

      {/* Additional Details */}
      <div className="flex flex-col space-y-2 text-neutral-400">
        <ul>Grade: 8.78 CGPA</ul>
        <ul>Relevant coursework: Operating Systems, Machine Learning, Database Management Systems, Object Oriented Programming, Semiconductor Devices, Microwave Engineering, Fiber Optics, Quantum Information and Computing.</ul>
        <ul>Research Work: Kite Shaped Nanoantenna for Electric Field Enhancement, International Conference on Physics (ICP), 2024</ul>
      </div>
    </div>
  );
};

export default Education;
