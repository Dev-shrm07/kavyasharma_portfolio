import React from "react";
import HProjectcard from "../HProjectcard";
import { Button } from "../ui/button";
const HomeProject = () => {
  return (
    <div className="flex flex-col min-h-[80vh] w-full bg-neutral-950 space-y-10 px-5 py-5 justify-center items-center">
      <div className="flex flex-col justify-center items-start space-y-3">
      <h1 className="text-4xl font-bold text-white">Featured Projects</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 space-x-0 md:space-x-10 md:space-y-0">
        <HProjectcard />
        <HProjectcard />
        <HProjectcard />
      </div>
      <Button className="bg-neutral-700 bg-opacity-55 w-40 md:w-60 text-white px-8 font-bold text-[14px] hover:bg-opacity-40  hover:text-white">
        See More ➜
      </Button>
    </div>
  );
};

export default HomeProject;
