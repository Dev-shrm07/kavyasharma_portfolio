"use client"
import { BackgroundBeamsWithCollision } from "@/components/BackgroundWithCollision";
import TypewriterHeading from "../TypeWrirter";
import { Button } from "../ui/button";
import HeroSection from "./About";
import HomeProject from "./HomeProject";
export default function Hero() {
  return (
    <>
    <BackgroundBeamsWithCollision>
    <TypewriterHeading/>
  </BackgroundBeamsWithCollision>
  <HeroSection/>
  <HomeProject/>
  </>
  );
}
