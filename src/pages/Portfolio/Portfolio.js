import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Portfolio() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />

      <Pricing />
    </>
  );
}

export default Portfolio;
