

import React from "react";

const Footer = () => {
  return (
    <div className="bg-black flex flex-wrap md:flex-nowrap text-white justify-between items-center py-7 px-10 border-t-[0.1px] border-zinc-700 space-y-10">
      <div className="flex flex-col space-y-2">
        <h3 className="text-2xl">Portfolio</h3>
        <p className="text-base text-gray-500">
          © Kavya Sharma. All rights reserved.
        </p>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl">Let&apos;s Connect</h3>
        <div className="flex space-x-6">
          <a href="https://www.github.com/Dev-shrm07" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=FFFFFF"
              className="w-4 h-4 hover:scale-125 cursor-pointer transition-transform"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/kavyash71102/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=98960&format=png&color=FFFFFF"
              className="w-4 h-4 hover:scale-125 cursor-pointer transition-transform"
              alt="LinkedIn"
            />
          </a>
          <a href="https://x.com/kshrm02" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/?size=100&id=A4DsujzAX4rw&format=png&color=FFFFFF"
              className="w-4 h-4 hover:scale-125 cursor-pointer transition-transform"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
