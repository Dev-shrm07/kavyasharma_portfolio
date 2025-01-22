import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const TypewriterHeading = () => {
  const [displayText, setDisplayText] = useState("");
  const [subText, setSubText] = useState("");
  const mainText = "Hi, I'm Kavya Sharma!";
  const phrases = ["Data Scientist", "Software Engineer"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTypingMain, setIsTypingMain] = useState(true);

  useEffect(() => {
    if (isTypingMain) {
      if (displayText.length < mainText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(mainText.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setIsTypingMain(false);
      }
    } else {
      const currentPhrase = phrases[phraseIndex];

      if (subText !== currentPhrase) {
        const timeout = setTimeout(() => {
          if (subText.length > currentPhrase.length) {
            setSubText(subText.slice(0, -1));
          } else {
            setSubText(currentPhrase.slice(0, subText.length + 1));
          }
        }, 50);
        return () => clearTimeout(timeout);
      } else if (phraseIndex < phrases.length - 1) {
        const timeout = setTimeout(() => {
          setPhraseIndex(phraseIndex + 1);
          setSubText("");
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, subText, phraseIndex, isTypingMain]);

  return (
    <div className="relative z-20 min-h-[300px] flex flex-col items-center justify-center pt-10 md:pt-0">
      <h2 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center text-white dark:text-white font-sans tracking-tight h-24 flex items-center">
        {displayText}
      </h2>
      <div className="h-24 flex items-center">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="text-2xl md:text-3xl lg:text-5xl font-bold min-h-[60px] block">
              {subText || "\u00A0"}
            </span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="text-2xl md:text-3xl lg:text-5xl font-bold min-h-[60px] block">
              {subText || "\u00A0"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-9 space-y-9 md:space-y-0">
        {" "}
        <Button className="bg-white w-40 md:w-60 text-black px-8 font-bold text-[14px] hover:bg-neutral-300 hover:bg-opacity-90 hover:text-black">
          Contact
        </Button>
        <Button className="bg-neutral-700 bg-opacity-55 w-40 md:w-60 text-white px-8 font-bold text-[14px] hover:bg-opacity-40  hover:text-white">
          Projects
        </Button>
      </div>
    </div>
  );
};

export default TypewriterHeading;
