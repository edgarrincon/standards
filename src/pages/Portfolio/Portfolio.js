import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjTwo } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

function Portfolio() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
    </>
  );
}

export default Portfolio;
